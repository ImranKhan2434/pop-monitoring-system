import Progressbar from '../progressbar/Progressbar'
import './Card.scss'
const Card = ({title, data, color, borderColor, cardBg, icon, handelNavigation}) => {
  return (
    <main
      style={{color: `${color}`, border: `1.2px solid ${borderColor}`}}
      className='card shadow px-4 py-4 power-card cursor-pointer'
      onClick={() => handelNavigation(title, data, color)}
    >
      <div className='d-flex justify-content-between'>
        <div className='title'>{title}</div>
        <div className='font-17 mt-n2'>{icon}</div>
      </div>

      {data > 0 && <div className='value'>{data}</div>}
      {!data && data === 0 && <div className='value'>0</div>}
      <section className='mt-2 w-full'>
        <Progressbar bg={color} value={data} total={data} />
      </section>
    </main>
  )
}

export default Card
