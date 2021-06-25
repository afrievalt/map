import useDebounce from '../../hooks/useDebounce'
import { fetchChargeLocations } from '../../store/ducks/chargeLocations.duck'
import { useDispatch } from 'react-redux'
import { MapContext } from '../../controls/Map/Map'
import { useContext, useEffect } from 'react'

function FetchChargingLocations () {
  const dispatch = useDispatch()
  const context = useContext(MapContext)
  const search = useDebounce(context, 500)
  const {
    lat,
    lng,
    zoom
  } = search
  useEffect(() => {
    dispatch(fetchChargeLocations({ lng, lat, zoom }))
  }, [lng, lat, zoom, dispatch])

  return null // no rendering
}

export default FetchChargingLocations
