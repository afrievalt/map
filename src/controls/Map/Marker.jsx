import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef } from 'react'

const temp = [
  -122.076575, 37.415328
]

const Marker = ({ map }) => {
  // const markerRef = useRef(null)
  const onceRef = useRef(false)
  useEffect(() => {
    if (map && !onceRef.current) {
      onceRef.current = true
      new mapboxgl.Marker()
        .setLngLat(temp)
        .addTo(map)
    }
  }, [map])

  return null
  // return (
  //   <div ref={markerRef} className='marker' />

  // )
}

export default Marker
