import {useEffect, useState} from 'react'
import LoadModal from './modal/LodalModal'

const SwitchContainer = ({switchStatus}) => {
  const bgColor = ['#f8fef8', '#fef8f8']
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)

  const [isChecked, setChecked] = useState(switchStatus)
  const handleLoadToggle = () => {
    handleShow()
  }
  useEffect(() => {
    setChecked(switchStatus)
  }, [switchStatus])
  return (
    <>
      <main className='d-flex justify-content-end'>
        <section
          style={{
            border: `${isChecked ? '1.2px solid #cef5ce' : '1.2px solid #facccc'}`,
            background: `${isChecked ? bgColor[0] : bgColor[1]}`,
          }}
          className='card shadow-lg p-4 switch-container'
        >
          <div className='d-flex align-items-center gap-5'>
            <div className={`fw-bold fs-3 text-uppercase ${isChecked ? 'text-green' : 'text-red'}`}>
              Load <span>{`${isChecked ? 'On' : 'Off'}`}</span>
            </div>
            <label className='switch'>
              <input type='checkbox' checked={isChecked} onChange={handleLoadToggle} />
              <span className='slider round' />
            </label>
          </div>
        </section>
      </main>

      <LoadModal show={show} setShow={setShow} isChecked={isChecked} setChecked={setChecked} />
    </>
  )
}

export default SwitchContainer
