import { Container } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Map from '../../controls/Map/Map'
import Marker from '../../controls/Map/Marker'
import { fetchChargeLocations } from '../../store/ducks/chargeLocations.duck'
import { selectChargeLocationsForMap } from './chargeLocations.selectors'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchChargeLocations())
  }, [])
  const mapLocations = useSelector(selectChargeLocationsForMap)
  return (
    <Container>
      <h1>Home</h1>
      <Map>
        {
          mapLocations.map(l =>
            <Marker coordinates={l.coordinates} key={l.id} />
          )
        }
      </Map>
    </Container>
  )
}

export default Home
