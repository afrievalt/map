import { useContext, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import PropTypes from 'prop-types'
import { MapContext } from './Map'

const propTypes = {
  coordinates: PropTypes.array.isRequired
}

const Marker = ({ coordinates }) => {
  const { map } = useContext(MapContext)
  useEffect(() => {
    const marker = new mapboxgl.Marker()
    map && marker.setLngLat(coordinates)
      .addTo(map)
    return () => {
      marker.remove()
    }
  }, [map])
  return null
}
Marker.propTypes = propTypes

export default Marker
