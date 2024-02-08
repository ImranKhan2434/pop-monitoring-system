import {useLocation} from 'react-router-dom'
import Table from './PopDetailsTable/Table'
import './PopListPage.scss'
import {getAllPops} from '../../api/popMonitoring'
import {useEffect, useState} from 'react'
import {errorToast} from '../../../../../_sos/utils/toastService'

const PopDetailsPage = () => {
  const {state} = useLocation()
  const [isLoading, setLoading] = useState(true)
  const [popList, setPopList] = useState([])

  const fetchAllPops = async () => {
    try {
      const {
        data: {data: pops},
      } = await getAllPops()
      console.log(pops)
      setPopList(pops)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
      errorToast(error)
    }
  }

  useEffect(() => {
    fetchAllPops()
  }, [])
  return (
    <main className='pop-details-page h-full'>
      <div className='card p-5 shadow'>
        <div className='fw-bold fs-3 mb-3'>
          {
            <h2 style={{color: state.color}}>
              {state.title} - {state.data}
            </h2>
          }
        </div>
        <section className='row'>
          <div className='col-md-12'>
            <Table tableData={popList} isLoading={isLoading} />
          </div>
        </section>
      </div>
    </main>
  )
}

export default PopDetailsPage
