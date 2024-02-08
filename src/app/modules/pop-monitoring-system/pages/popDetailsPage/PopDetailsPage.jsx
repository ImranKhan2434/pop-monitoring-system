import {useLocation} from 'react-router-dom'
import {useState} from 'react'
import PopLocationModal from './components/modal/PopLocationModal'
import './PopDetailsPage.scss'
import PopInfoCard from './components/card/PopInfoCard'
import DiagramContainer from './components/diagram/DiagramContainer'

const PopDetailsPage = () => {
  const [show, setShow] = useState(false)

  const {
    state: {info},
  } = useLocation()

  return (
    <main className='h-full pop-details'>
      <section>
        <PopInfoCard info={info} setShow={setShow} />
      </section>
      <section className='mt-5'>
        <div className='card p-5 shadow'>
          <DiagramContainer />
        </div>
      </section>
      <PopLocationModal show={show} setShow={setShow} info={info} />
    </main>
  )
}

export default PopDetailsPage
