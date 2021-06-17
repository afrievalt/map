import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from 'react'
import { mapboxglAccessToken } from '../../secretes'
import useEffectOnce from '../../hooks/useEffectOnce'
// normally we would not put this here
mapboxgl.accessToken = mapboxglAccessToken

const Map = () => {
  const mapRef = useRef(null)
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)
  useEffectOnce(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })
  })

  useEffect(() => {
    if (mapRef.current) { // wait for map to initialize
      console.log(mapRef.current)
      mapRef.current.on('move', () => {
        const { lng, lat } = mapRef.current.getCenter() || {}
        setLng(lng.toFixed(4))
        setLat(lat.toFixed(4))
        setZoom(mapRef.current.getZoom().toFixed(2))
        // todo: debounce
      })
    }
    //return () => { mapRef.current = null } // todo: figure out how to clean up (off?)
  })

  return (
    <div>
      {JSON.stringify({ lng, lat })}
      <div ref={mapRef} className='map-container' />
    </div>
  )
}

export default Map
