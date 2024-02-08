// import axios from 'axios'
import {FC} from 'react'
// import {useIntl} from 'react-intl'
import PoPMSDashboard from '../../modules/pop-monitoring-system/pages/dashboard/Dashboard'

const DashboardPage: FC = () => (
  <>
    {/* <LeafletMapContainer /> */}
    <div className=''>
      <PoPMSDashboard />
    </div>
  </>
)

const DashboardWrapper: FC = () => {
  // const intl = useIntl()
  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
