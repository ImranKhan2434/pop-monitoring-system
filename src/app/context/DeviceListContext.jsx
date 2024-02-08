import {createContext, useEffect, useState} from 'react'
import {errorToast} from '../../_sos/utils/toastService'
import {useAuth} from '../modules/auth'
import {getAllDevices} from '../modules/pop-monitoring-system/api/device'

export const DeviceListContext = createContext()

export const DeviceListProvider = ({children}) => {
  const [deviceList, setDeviceList] = useState([])
  // const [initialId, setInitialId] = useState(null)
  // const [firstDeviceId, setFirstDeviceId] = useState(null)
  const [tuyaDeviceCode, setTuyaDeviceCode] = useState(null)
  const [aqiDeviceCode, setAqiDeviceCode] = useState(null)
  // const [totalOnline, setTotalOnline] = useState(0)
  const {currentUser} = useAuth()

  // const calculateTotalActiveDevices = (irsList) => {
  //   let online = 0
  //   irsList.forEach((element) => {
  //     if (element?.is_active) {
  //       online += 1
  //     }
  //   })
  //   // setTotalOnline(online)
  // }
  const getDeviceList = async () => {
    try {
      const data = await getAllDevices()
      setTuyaDeviceCode(data.data.data[0].devices[0].code)
      setAqiDeviceCode(data.data.data[1].devices[0].code)
      // console.log(data.data.data)
      // setFirstDeviceId(data.data.data[0].devices[0].code)
      setDeviceList(data.data.data[0].devices)
      // setFirstDeviceId(data.data.data[0].devices[0].id)
      // setInitialId(data.data.data[0].devices[1].id)
      // calculateTotalActiveDevices(data.data.data[0].devices)
    } catch (error) {
      console.log(error)
      errorToast(`Fetching data from context: ${error}`)
    }
  }

  useEffect(() => {
    if (currentUser) getDeviceList()
  }, [currentUser])

  return (
    <DeviceListContext.Provider value={{deviceList, tuyaDeviceCode, aqiDeviceCode}}>
      {children}
    </DeviceListContext.Provider>
  )
}
