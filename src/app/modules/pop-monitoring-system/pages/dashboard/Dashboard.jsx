import {useEffect, useState} from 'react'
import {getAllPops} from '../../api/popMonitoring'
import './Dashboard.scss'
import CardContainer from './components/containers/CardContainer'
import AlarmListTable from './components/tables/alarmListTable/AlarmListTable'
import PopListTable from './components/tables/popListTable/PopListTable'
import {errorToast} from '../../../../../_sos/utils/toastService'

const Dashboard = () => {
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
    <main className='pop-ms-dashboard'>
      <section>
        <CardContainer popList={popList} isLoading={isLoading} />
      </section>
      <section className='row mt-7'>
        <div className='col-md-6'>
          <AlarmListTable tableData={popList} isLoading={isLoading} />
        </div>
        <div className='col-md-6'>
          <PopListTable tableData={popList} isLoading={isLoading} />
        </div>
      </section>
    </main>
  )
}

export default Dashboard
