import {useState} from 'react'
import ReactApexChart from 'react-apexcharts'

const CombinedChart = ({todayData, thisWeekData, thisMonthData, thisYearData, height}) => {
  // const [chartData, setChartData] = useState({
  //   series: [
  //     {
  //       name: 'Voltage',
  //       data: voltageChartData,
  //     },
  //     {
  //       name: 'Power',
  //       data: currentChartData,
  //     },
  //     {
  //       name: 'Current',
  //       data: powerChartData,
  //     },
  //   ],
  //   options: {
  //     chart: {
  //       type: 'area',
  //       stacked: false,
  //       height: 350,
  //       zoom: {
  //         type: 'x',
  //         enabled: true,
  //         autoScaleYaxis: true,
  //       },
  //       toolbar: {
  //         autoSelected: 'zoom',
  //       },
  //     },
  //     colors: ['#C60000', '#0CCE0C', '#336AEA'],
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     markers: {
  //       size: 0,
  //     },
  //     // title: {
  //     //   text: 'Stock Price Movement',
  //     //   align: 'left',
  //     // },
  //     stroke: {
  //       curve: 'straight',
  //       width: 4,
  //     },
  //     grid: {
  //       row: {
  //         colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
  //         opacity: 0.5,
  //       },
  //     },
  //     // fill: {
  //     //   // type: 'gradient',
  //     //   gradient: {
  //     //     shadeIntensity: 1,
  //     //     inverseColors: false,
  //     //     opacityFrom: 0.5,
  //     //     opacityTo: 0,
  //     //     stops: [0, 90, 100],
  //     //   },
  //     // },
  //     yaxis: {
  //       labels: {
  //         formatter: function (val) {
  //           let value = val.toFixed(0)
  //           return `${value}`
  //         },
  //       },
  //       // title: {
  //       //   text: 'Price',
  //       // },
  //     },
  //     xaxis: {
  //       type: 'datetime',
  //       labels: {
  //         datetimeFormatter: {
  //           year: 'yyyy',
  //           month: "MMM 'yy",
  //           day: 'dd MMM',
  //           hour: 'hh:mm tt',
  //         },
  //       },
  //     },
  //     tooltip: {
  //       shared: false,
  //       y: {
  //         formatter: function (val) {
  //           return val.toFixed(2)
  //         },
  //       },
  //     },
  //   },
  // })

  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Energy Consumption',
        data: [todayData, thisWeekData, thisMonthData, thisYearData],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          horizontal: true,
          distributed: true,
        },
      },
      colors: ['#FFBA00', '#F0F00B', '#4E90D6', '#DD2E35'],
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

        labels: {
          formatter: function (val) {
            let value = val.toFixed(0)
            return `${value} kWh`
          },
          style: {
            fontSize: '11px',
            fontWeight: 500,
            cssClass: 'apexcharts-xaxis-label',
          },
        },
        categories: ['Today', 'This Week', 'This Month', 'This Year'],
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '12px',
            fontWeight: 500,
            cssClass: 'apexcharts-xaxis-label',
          },
        },
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            const result = val.toFixed(2)
            return `${result} kWh`
          },
        },
      },
    },
  })
  return (
    <>
      <div style={{overflow: 'hidden'}}>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type='bar'
          // type='area'
          height={height}
        />
      </div>
    </>
  )
}

export default CombinedChart
