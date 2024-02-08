import {useState, useEffect, useContext} from 'react'
import {errorToast} from '../../../../_sos/utils/toastService'
import {DeviceListContext} from '../../../context/DeviceListContext'
import {getAllEnergyConsumptionData} from '../api/energyMonitoring'

const useFetchEnergyConsumption = () => {
  const [todayData, setTodayData] = useState([])
  const [thisWeekData, setThisWeekData] = useState([])
  const [thisMonthData, setThisMonthData] = useState([])
  const [thisYearData, setThisYearData] = useState([])
  const [isEcLoading, setEcLoading] = useState(true)
  const [error, setError] = useState(null)
  const {tuyaDeviceCode} = useContext(DeviceListContext)

  const fetchEnergyMonitoringData = async () => {
    setEcLoading(true)
    try {
      const [today, week, month, year] = await getAllEnergyConsumptionData(tuyaDeviceCode)
      setTodayData(today.data.latest)
      setThisWeekData(week.data.latest)
      setThisMonthData(month.data.latest)
      setThisYearData(year.data.latest)
      setEcLoading(false)
    } catch (error) {
      setEcLoading(false)
      errorToast(`${error}`)
      console.log(error)
      setError(error)
    }
  }

  useEffect(() => {
    if (tuyaDeviceCode) fetchEnergyMonitoringData()
  }, [tuyaDeviceCode])

  return {todayData, thisWeekData, thisMonthData, thisYearData, isEcLoading, error}
}

export default useFetchEnergyConsumption
