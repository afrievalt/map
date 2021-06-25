import React, { useRef, useState, createContext } from 'react'
import mapboxgl from 'mapbox-gl'
import { mapboxglAccessToken } from '../../secretes'
import useEffectOnce from '../../hooks/useEffectOnce'
export const MapContext = createContext()
mapboxgl.accessToken = mapboxglAccessToken

const MILWAUKEE = {
  lat: 43.0292238997657,
  lng: -87.9368712076874
}

export default function Map ({ children }) {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(MILWAUKEE.lng)
  const [lat, setLat] = useState(MILWAUKEE.lat)
  const [zoom, setZoom] = useState(11)

  useEffectOnce(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom
    })
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })

  const context = {
    map: map.current,
    lat,
    lng,
    zoom
  }
  return (
    <MapContext.Provider value={context}>
      <div>
        <div ref={mapContainer} className='map-container' />
        {children}
      </div>
    </MapContext.Provider>
  )
}
