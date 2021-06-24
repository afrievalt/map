import { useContext, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import PropTypes from 'prop-types'
import { MapContext } from './Map'

const propTypes = {
  coordinates: PropTypes.array.isRequired
}

const Marker = ({ coordinates }) => {
  const { map } = useContext(MapContext)
  const marker = useRef(new mapboxgl.Marker())
  useEffect(() => {
    map && marker.current.setLngLat(coordinates)
      .addTo(map)
    return () => {
      marker.current.remove()
    }
  }, [map])
  return null
}
Marker.propTypes = propTypes

export default Marker
