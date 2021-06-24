import React, { useRef, useEffect, useState, createContext } from 'react'
import mapboxgl from 'mapbox-gl'
import { mapboxglAccessToken } from '../../secretes'
export const MapContext = createContext()
mapboxgl.accessToken = mapboxglAccessToken

export default function Map ({ children }) {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if (map.current) {
      return // initialize map only once
    }
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 11
    })
  })

  useEffect(() => {
    if (!map.current && !mapContainer.current) {
      return // wait for map to initialize
    }
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  }, [children])
  const context = {
    mapContainer,
    map: map.current,
    lat,
    lng,
    zoom
  }
  return (
    <MapContext.Provider value={context}>
      <div>
        {children}
        <div ref={mapContainer} className='map-container' />
      </div>
    </MapContext.Provider>
  )
}
