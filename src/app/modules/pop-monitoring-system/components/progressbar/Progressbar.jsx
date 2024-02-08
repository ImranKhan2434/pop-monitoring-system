import './Progressbar.scss'

const Progressbar = ({bg, currentValue, maxValue}) => {
  let fillWidth = Math.round((currentValue * 100) / maxValue)
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
