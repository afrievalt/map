import useDebounce from '../../hooks/useDebounce'
import { fetchChargeLocations } from '../../store/ducks/chargeLocations.duck'
import { useDispatch } from 'react-redux'
import { MapContext } from '../../controls/Map/Map'
import { useContext, useEffect } from 'react'

export default function Map ({ children }) {
  const dispatch = useDispatch()
  const context = useContext(MapContext)
  const {
    lat,
    lng,
    zoom
  } = context
  const search = useDebounce({ lng, lat, zoom }, 500)

  useEffect(() => {
    dispatch(fetchChargeLocations(search))
  }, [search.lat, search.lng, search.zoom])

  return null
}
