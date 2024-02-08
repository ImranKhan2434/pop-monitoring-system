import Progressbar from '../progressbar/Progressbar'
import {IoStatsChart} from 'react-icons/io5'
import './Card.scss'
const Card = ({title, unit, data, color, borderColor, cardBg, maxValue}) => {
  return (
    <main
      style={{color: `${color}`, border: `1.2px solid ${borderColor}`, background: cardBg}}
      className='card shadow px-4 py-4 power-card'
    >
      {/* style={{background: bg}} */}
      <div className='d-flex justify-content-between'>
        <div className='title'>{title}</div>
        <div className='title-icon'>
          <IoStatsChart />
        </div>
      </div>

      {data > 0 && (
        <div className='value'>
          {data.toFixed(2)} <span>{unit}</span>
        </div>
      )}
      {!data && data === 0 && (
        <div className='value'>
          0 <span>{unit}</span>
        </div>
      )}
      <section className='mt-2 w-full'>
        <Progressbar bg={color} currentValue={data} maxValue={maxValue} />
      </section>
    </main>
  )
}

export default Card
