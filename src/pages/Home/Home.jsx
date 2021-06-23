import React from 'react'
import { useSelector } from 'react-redux'
import Map from '../../controls/Map/Map'
import Marker from '../../controls/Map/Marker'
import { selectChargeLocationsForMap } from './chargeLocations.selectors'
import ContentArea from './ContentArea/ContentArea'
import Stack from '../../controls/LayoutAtoms/Stack'
import FetchChargingLocations from './FetchChargingLocations'
const Home = () => {
  const mapLocations = useSelector(selectChargeLocationsForMap)
  console.log({ mapLocations })
  return (
    <Stack>
      <ContentArea />
      <Map>
        <FetchChargingLocations />
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
