import Spinner from '../../../spinner/Spinner'
import Card from '../../components/card/Card'
import SwitchContainer from '../SwitchContainer'

const CardsContainer = ({isLoading, cardInfo}) => {
  let voltageUnit = 'V',
    powerUnit = 'W',
    currentUnit = 'mA'
  let voltageValue = 0,
    powerValue = 0,
    currentValue = 0
  if (cardInfo?.cur_voltage_1 > 0) {
    voltageValue = cardInfo.cur_voltage_1
    voltageUnit = 'V'
  }
  if (cardInfo?.cur_current_1 > 0) {
    currentValue =
      cardInfo.cur_current_1 > 0.999 ? cardInfo.cur_current_1 : cardInfo.cur_current_1 * 1000
    currentUnit = cardInfo.cur_current_1 > 999 ? 'A' : 'mA'
  }
  if (cardInfo?.cur_power_1 > 0) {
    powerValue = cardInfo.cur_power_1 > 999 ? cardInfo.cur_power_1 / 1000 : cardInfo.cur_power_1
    powerUnit = cardInfo.cur_power_1 > 999 ? 'kW' : 'W'
  }
  return (
    <main className='card shadow px-6 py-4 power-card-container'>
      {isLoading ? (
        <div className='my-80'>
          <Spinner />
        </div>
      ) : (
        <>
          <div style={{color: '#404ea8'}} className='fw-bold fs-2 mb-3'>
            PDB Status
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <Card
              title='Energy Consumption'
              data={cardInfo?.power_kwp}
              maxValue={100}
              unit='kWh'
              color='#ffa500'
              borderColor='#ffedcc'
              cardBg='#fffcf8'
            />
            <Card
              title='Power'
              data={powerValue}
              maxValue={120}
              unit={powerUnit}
              color='#0CCE0C'
              borderColor='#cef5ce'
              cardBg='#f8fef8'
            />
            <Card
              title='Voltage'
              data={voltageValue}
              maxValue={320}
              unit={voltageUnit}
              color='#e60101'
              borderColor='#facccc'
              cardBg='#fef8f8'
            />
            <Card
              title='Current'
              data={currentValue}
              maxValue={currentUnit === 'mA' ? 999 : 120}
              unit={currentUnit}
              // data={11.01}
              // unit={'A'}
              color='#336AEA'
              borderColor='#d6e1fb'
              cardBg='#f7f9fe'
            />
            {/* <Card title='C1' subtitle='Current 1' data='200' bg='#2d3776' /> */}
            {/* <Card title='C2' subtitle='Current 2' data='250' bg='#404ea8' /> */}
            {/* <Card title='C3' subtitle='Current 3' data='200' bg='#6671b9' /> */}
            {/* <Card title='PF' subtitle='Power Factor' data='300' bg='#ffa500' /> */}
          </div>
          <div className='mt-4 d-flex justify-content-end'>
            {cardInfo.switch_1 !== null && <SwitchContainer switchStatus={cardInfo.switch_1} />}
          </div>
        </>
      )}
    </main>
  )
}

export default CardsContainer
