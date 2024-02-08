import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  DateTime,
  DataLabel,
  Legend,
} from '@syncfusion/ej2-react-charts'

import {phaseA} from '../../../../../../data/phase_current/PhaseA'
import {phaseB} from '../../../../../../data/phase_current/PhaseB'
import {phaseC} from '../../../../../../data/phase_current/PhaseC'

const LineChart = () => {
  const primaryxAxis = {
    valueType: 'DateTime',
    title: 'According to Date',
    labelFormat: 'h:m',
  }
  const primaryyAxis = {
    title: 'According to Phase current A',
  }

  return (
    <ChartComponent
      id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      tooltip={{enable: true}}
      title='Average Current Comparison'
      legendSettings={{background: 'white'}}
    >
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, DateTime]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={phaseA}
          xName='Time'
          yName='PhaseA'
          name='Phase A'
          type='Line'
        ></SeriesDirective>
        <SeriesDirective
          dataSource={phaseB}
          xName='Time'
          yName='PhaseB'
          name='Phase B'
          type='Line'
        ></SeriesDirective>
        <SeriesDirective
          dataSource={phaseC}
          xName='Time'
          yName='PhaseC'
          name='Phase C'
          type='Line'
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart
