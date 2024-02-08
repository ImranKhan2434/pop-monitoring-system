import './Progressbar.scss'

const Progressbar = ({bg, value, total}) => {
  const max = total
  let fillWidth = value === 0 ? 0 : Math.round((value * 100) / max)
  return (
    <div className='progress-bar'>
      <div
        className={`progress-bar-fill`}
        style={{background: `${bg}`, width: `${fillWidth}%`}}
      ></div>
    </div>
  )
}

export default Progressbar
