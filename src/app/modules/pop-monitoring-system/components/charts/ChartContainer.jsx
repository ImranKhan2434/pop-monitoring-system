import EnergyConsumptionChart from './EnergyConsumtionChart'
import PowerChart from '../charts/PowerChart'
import VoltageChart from '../charts/VoltageChart'
import CurrentChart1 from '../charts/CurrentChart1'
import moment from 'moment'
import SectionHeader from './SectionHeader'
import {useState} from 'react'
//import {Oval} from 'react-loader-spinner'

const ChartContainer = ({isLoading, chartData, range, setRange}) => {
  const [loading, setLoading] = useState(true)

  const voltageChartData = chartData?.cur_voltage_1?.map((item) => {
    let date = new Date(item.created_at)
    return [moment(date).valueOf() + 21600000, item.cur_voltage_1]
  })
  const currentChartData = chartData?.cur_current_1?.map((item) => {
    let date = new Date(item.created_at)
    return [moment(date).valueOf() + 21600000, item.cur_current_1]
  })
  const powerChartData = chartData?.cur_power_1?.map((item) => {
    let date = new Date(item.created_at)
    return [moment(date).valueOf() + 21600000, item.cur_power_1]
  })
  return (
    <main>
      <section className='row mt-5'>
        <div className='col-md-6'>
          <div className='position-relative'>
            {/* {loading && (
              <div className='spinner-center'>
                <Oval
                  visible={true}
                  height='80'
                  width='80'
                  color='#FF0000'
                  secondaryColor='#c6c6c6'
                  ariaLabel='oval-loading'
                  strokeWidth='3'
                  wrapperStyle={{}}
                  wrapperClass=''
                />
              </div>
            )} */}
            <EnergyConsumptionChart />
          </div>
        </div>

        <div className='col-md-6'>
          {isLoading && <SectionHeader title='Power' color='#0CCE0C' />}
          {/* <div className='position-relative'>
            {isLoading && (
              <div className='spinner-center'>
                <Oval
                  visible={true}
                  height='80'
                  width='80'
                  color='#FF0000'
                  secondaryColor='#c6c6c6'
                  ariaLabel='oval-loading'
                  strokeWidth='3'
                  wrapperStyle={{}}
                  wrapperClass=''
                />
              </div>
            )}
            <PowerChart data={powerChartData} range={range} setRange={setRange} />
          </div> */}
          {!isLoading && powerChartData && (
            <PowerChart data={powerChartData} range={range} setRange={setRange} />
          )}
        </div>
      </section>

      <div className='row mt-5'>
        <div className='col-md-6'>
          {isLoading && <SectionHeader title='Voltage' color='#C60000' />}
          {!isLoading && voltageChartData && (
            <VoltageChart data={voltageChartData} range={range} setRange={setRange} />
          )}
          {/* <VoltageChart isLoading={isLoading} chartData={vChartData} /> */}
        </div>
        <section className='col-md-6'>
          {isLoading && <SectionHeader title='Current' color='#FFE300' />}
          {!isLoading && currentChartData && (
            <CurrentChart1 data={currentChartData} range={range} setRange={setRange} />
          )}
        </section>
      </div>

      {/* <section className='mt-7'>
        <CurrentChart2 />
      </section>
      <section className='mt-7'>
        <CurrentChart3 />
      </section>
      <section className='mt-7'>
        <PowerFactorChart />
      </section> */}
    </main>
  )
}

export default ChartContainer
