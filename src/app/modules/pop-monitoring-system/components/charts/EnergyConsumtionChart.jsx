import {useState} from 'react'
import ReactApexChart from 'react-apexcharts'

const EnergyConsumptionChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Desktops',
        data: [30, 15, 25, 40, 35, 50, 45, 30, 15, 25, 40, 35, 50, 45, 25, 40],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
        },
      },
      colors: ['#FFBA00'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        // title: {
        //   text: 'SOS',
        // },
        categories: [
          '15 Nov',
          '16 Nov',
          '17 Nov',
          '18 Nov',
          '19 Nov',
          '20 Nov',
          '21 Nov',
          '22 Nov',
          '23 Nov',
          '24 Nov',
          '25 Nov',
          '26 Nov',
          '27 Nov',
          '28 Nov',
          '29 Nov',
          '30 Nov',
        ],
      },
    },
  })
  const fetchData = (timeRange) => {
    console.log(timeRange)
  }
  return (
    <div className='energy-consumption'>
      <section className='row'>
        <div className='col-12'>
          <div className='card pt-5 px-4 pb-0 shadow'>
            <div className='d-flex justify-content-between align-items-center'>
              <div style={{color: '#FFBA00'}} className='card-label fw-bold fs-2'>
                Energy Consumption
              </div>
              <select onChange={(e) => fetchData(e.target.value)}>
                <option value='TODAY'>Today</option>
                <option value='THIS_WEEK'>Last 7 days</option>
                <option value='THIS_MONTH'>Last 30 days</option>
                <option value='THIS_YEAR'>Last Year</option>
              </select>
            </div>
            <div className='row'>
              {/* <div className='col-6 overflow-hidden px-0'>
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type='area'
                  height={300}
                />
              </div> */}
              <div className='col-12 overflow-hidden px-0'>
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type='bar'
                  height={252}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnergyConsumptionChart
