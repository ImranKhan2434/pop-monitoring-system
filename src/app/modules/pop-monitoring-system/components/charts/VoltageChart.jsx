import {useState} from 'react'
import ReactApexChart from 'react-apexcharts'

const VoltageChart = ({range, setRange, data = []}) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Voltage',
        data: data,
      },
    ],
    options: {
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: 'zoom',
        },
      },
      colors: ['#C60000'],
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      // title: {
      //   text: 'Stock Price Movement',
      //   align: 'left',
      // },
      stroke: {
        curve: 'straight',
        width: 4,
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      // fill: {
      //   // type: 'gradient',
      //   gradient: {
      //     shadeIntensity: 1,
      //     inverseColors: false,
      //     opacityFrom: 0.5,
      //     opacityTo: 0,
      //     stops: [0, 90, 100],
      //   },
      // },
      yaxis: {
        labels: {
          formatter: function (val) {
            let value = val.toFixed(0)
            return `${value} V`
          },
        },
        // title: {
        //   text: 'Price',
        // },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeFormatter: {
            year: 'yyyy',
            month: "MMM 'yy",
            day: 'dd MMM',
            hour: 'hh:mm tt',
          },
        },
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val.toFixed(2)
          },
        },
      },
    },
  })

  return (
    <div className='voltage-details'>
      <section>
        <div className='card py-5 pb-0 px-4 shadow'>
          <div className='d-flex justify-content-between align-items-center'>
            <div style={{color: '#C60000'}} className='card-label fw-bold fs-2'>
              Voltage
            </div>
            <select value={range} onChange={(e) => setRange(e.target.value)}>
              <option value='today'>Today</option>
              <option value='this_week'>Last 7 days</option>
              <option value='this_month'>Last 30 days</option>
              <option value='this_year'>Last Year</option>
            </select>
          </div>
          {data.length > 0 && (
            <div className='row mt-5'>
              <div className='col-12 overflow-hidden px-0'>
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type='area'
                  height={236}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default VoltageChart
