import {useEffect, useState} from 'react'
import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api'
// import {useAuth} from '../../../../../auth'

const Map = () => {
  // const [center, setCenter] = useState({})
  const libraries = ['places']
  // const {currentUser} = useAuth()

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  })
  const center = {lat: 23.773735053560767, lng: 90.42532912522512}

  // useEffect(() => {
  //   if (currentUser?.station) {
  //     setCenter({lat: currentUser?.station?.latitude, lng: currentUser?.station?.longitude})
  //   } else {
  //     setCenter({lat: 23.7778, lng: 90.4057})
  //   }
  // }, [currentUser])

  if (!isLoaded) {
    return <h1 className='map-container'>Loading...</h1>
  }
  return (
    <div>
      <GoogleMap
        center={center}
        zoom={18}
        mapContainerStyle={{width: '100%', height: '50vh'}}
        options={{streetViewControl: false, mapTypeControl: false, scrollwheel: true}}
      >
        <Marker position={center} />
        {/* <TrafficLayer autoUpdate /> */}
      </GoogleMap>
    </div>
  )
}

export default Map
