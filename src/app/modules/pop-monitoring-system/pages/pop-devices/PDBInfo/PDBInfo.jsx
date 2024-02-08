import {useContext, useEffect, useState} from 'react'
import {errorToast} from '../../../../../../_sos/utils/toastService'
import CardsContainer from '../../../components/cards-container/CardsContainer'
import {
  getEnergyMonitoringHistoryData,
  getEnergyMonitoringLatestData,
} from '../../../api/energyMonitoring'
import ChartContainer from '../../../components/charts/ChartContainer'
import CombinedChart from '../../../components/charts/CombinedChart'
import './PDBInfo.scss'
import Spinner from '../../../../spinner/Spinner'
import useFetchEnergyConsumption from '../../../hooks/useFetchEnergyConsumption'
import {DeviceListContext} from '../../../../../context/DeviceListContext'

const PDBInfo = () => {
  const {tuyaDeviceCode} = useContext(DeviceListContext)
  // console.log(tuyaDeviceCode)
  const [range, setRange] = useState('today')
  const [isLatestDataLoading, setLatestDataLoading] = useState(true)
  const [isHistoryDataLoading, setHistoryLoading] = useState(true)
  const [energyMonitoringData, setEnergyMonitoringData] = useState([])
  const [energyMonitoringHistoryData, setEnergyMonitoringHistoryData] = useState([])

  const {todayData, thisWeekData, thisMonthData, thisYearData, isEcLoading, error} =
    useFetchEnergyConsumption()

  const fetchEnergyMonitoringData = async (tuyaDeviceCode, skipLoading) => {
    if (skipLoading) {
      setLatestDataLoading(false)
    } else setLatestDataLoading(true)
    try {
      const {
        data: {latest},
      } = await getEnergyMonitoringLatestData(tuyaDeviceCode)
      // console.log(latest)
      setEnergyMonitoringData(latest)
      setLatestDataLoading(false)
    } catch (error) {
      setLatestDataLoading(false)
      console.log(error)
      errorToast(error)
    }
  }
  const fetchEnergyMonitoringHistoryData = async (tuyaDeviceCode, range) => {
    // console.log(range)
    setHistoryLoading(true)
    try {
      const {
        data: {data: history},
      } = await getEnergyMonitoringHistoryData(tuyaDeviceCode, range)
      setEnergyMonitoringHistoryData(history)
      setHistoryLoading(false)
    } catch (error) {
      setHistoryLoading(false)
      console.log(error)
      errorToast(error)
    }
  }
  useEffect(() => {
    // console.log(tuyaDeviceCode)
    fetchEnergyMonitoringData(tuyaDeviceCode)
    fetchEnergyMonitoringHistoryData(tuyaDeviceCode)
  }, [])
  useEffect(() => {
    fetchEnergyMonitoringHistoryData(tuyaDeviceCode, range)
  }, [range])

  useEffect(() => {
    const intervalCall = setInterval(() => {
      fetchEnergyMonitoringData(tuyaDeviceCode, true)
      // console.log('recall energy monitoring api')
    }, 6000)
    return () => {
      clearInterval(intervalCall)
    }
  }, [])

  return (
    <>
      <main className='pdb-info'>
        <section>
          {energyMonitoringData && (
            <CardsContainer isLoading={isLatestDataLoading} cardInfo={energyMonitoringData} />
          )}
        </section>
        {/* <section className='mt-1'>
            {energyMonitoringData.switch !== null && (
              <SwitchContainer switchStatus={energyMonitoringData.switch} />
            )}
          </section> */}
        <section className='row mt-5'>
          {/* <div className='col-5'>
            <div className='card p-4'>
              <div style={{color: '#404ea8'}} className='fw-bold fs-2 mb-10'>
                Current Voltage
              </div>

              <div>
                <VoltageSpeedoChart
                  isLoading={isLatestDataLoading}
                  height={232}
                  voltage={energyMonitoringData?.cur_voltage_1}
                />
              </div>
            </div>
          </div> */}

          <div className='col-12'>
            <div className='card px-5 pt-4 pb-0 rounded'>
              <div style={{color: '#404ea8'}} className='fw-bold fs-2'>
                Energy Consumption Summary Chart
              </div>
              {isEcLoading && (
                <div className='my-91'>
                  <Spinner />
                </div>
              )}
              {!isEcLoading && (
                <div className='mt-n4'>
                  <CombinedChart
                    todayData={todayData.power_kwp}
                    thisWeekData={thisWeekData.power_kwp}
                    thisMonthData={thisMonthData.power_kwp}
                    thisYearData={thisYearData.power_kwp}
                    height={209}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
        <section>
          <ChartContainer
            isLoading={isHistoryDataLoading}
            chartData={energyMonitoringHistoryData}
            range={range}
            setRange={setRange}
          />
        </section>
      </main>
    </>
  )
}

export default PDBInfo
