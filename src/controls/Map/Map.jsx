import React, { Children, useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYWZyaWV2YWx0IiwiYSI6ImNrcHlmZG1ubDBkMTEydnBjbzhqcXB5Zm4ifQ.HPb-xVgehU4bkBPTuy2o7A'
const temp = [
  -122.076575, 37.415328
]

export default function Map ({ children }) {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const layers = useRef([])
  // const [lng, setLng] = useState(-70.9)
  // const [lat, setLat] = useState(42.35)
  // const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: temp,
      zoom: 9
    })
  })

  useEffect(() => {
    if (!map.current && !mapContainer.current) return // wait for map to initialize
    console.log('in use effect', Children.toArray(children).length)
    layers.current.forEach(l => l.remove())
    layers.current = []
    Children.toArray(children)
      .filter(c => c?.type?.name === 'Marker')
      .forEach((marker) => {
        const { coordinates } = marker.props || {}
        if (!coordinates) {
          return
        }
        layers.current.push(new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(map.current)
        )
      })
    // new mapboxgl.Marker()
    //   .setLngLat(temp)
    //   .addTo(map.current)
    // // map.current.on('move', () => {
    //   setLng(map.current.getCenter().lng.toFixed(4))
    //   setLat(map.current.getCenter().lat.toFixed(4))
    //   setZoom(map.current.getZoom().toFixed(2))
    // })
  }, [children])

  return (
    <div>
      <div ref={mapContainer} id='foo' className='map-container' />
    </div>
  )
}
