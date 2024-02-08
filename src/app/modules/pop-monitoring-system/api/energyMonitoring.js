import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL

export const getEnergyMonitoringLatestData = (deviceCode, dateRange = 'TODAY') => {
  const GET_LATEST_DATA = deviceCode
    ? `${API_URL}/device-stat/?device__code=${deviceCode}&date=${dateRange}`
    : `${API_URL}/device-stat/?device__code=16315000c45bbe7dc857&date=${dateRange}`

  return axios.get(GET_LATEST_DATA)
}
export const getAllEnergyConsumptionData = (deviceCode) => {
  const TODAY = `${API_URL}/device-stat/?device__code=${deviceCode}&date=TODAY`
  const THIS_WEEK = `${API_URL}/device-stat/?device__code=${deviceCode}&date=THIS_WEEK`
  const THIS_MONTH = `${API_URL}/device-stat/?device__code=${deviceCode}&date=THIS_MONTH`
  const THIS_YEAR = `${API_URL}/device-stat/?device__code=${deviceCode}&date=THIS_YEAR`

  let r1 = axios.get(TODAY)
  let r2 = axios.get(THIS_WEEK)
  let r3 = axios.get(THIS_MONTH)
  let r4 = axios.get(THIS_YEAR)

  return axios.all([r1, r2, r3, r4])
}
export const getEnergyMonitoringHistoryData = (deviceCode, dateRange = 'today') => {
  // console.log(dateRange)
  const GET_HISTORY_DATA = deviceCode
    ? `${API_URL}/device-histories/tuya-energy-meter/?page=0&device_code=${deviceCode}&date=${dateRange}`
    : `${API_URL}/device-histories/tuya-energy-meter/?page=0&device_code=16315000c45bbe7dc857&date=${dateRange}`

  return axios.get(GET_HISTORY_DATA)
}

export const getSwitchControl = (deviceCode, status) => {
  // console.log('Device status')
  console.log(status)
  const SWITCH_CONTROL = `${API_URL}/device-command/?device_id=${deviceCode}&switch_value=${status}`

  return axios.get(SWITCH_CONTROL)
}
