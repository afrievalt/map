import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Map from '../../controls/Map/Map'
import Marker from '../../controls/Map/Marker'
import { fetchChargeLocations } from '../../store/ducks/chargeLocations.duck'
import { selectChargeLocationsForMap } from './chargeLocations.selectors'
import ContentArea from './ContentArea/ContentArea'
import Stack from '../../controls/LayoutAtoms/Stack'
const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchChargeLocations())
  }, [])
  const mapLocations = useSelector(selectChargeLocationsForMap)
  console.log({ mapLocations })
  return (
    <Stack>
      <ContentArea />
      <Map>
        {
          mapLocations.map(l =>
            <Marker coordinates={l.coordinates} key={l.id} />
          )
        }
      </Map>

    </Stack>
  )
}

export default Home
