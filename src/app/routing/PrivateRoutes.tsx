import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
// import {MenuTestPage} from '../pages/MenuTestPage'
// import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const PopListPage = lazy(
    () => import('../modules/pop-monitoring-system/pages/popListPage/PopListPage')
  )
  const PopDetailsPage = lazy(
    () => import('../modules/pop-monitoring-system/pages/popDetailsPage/PopDetailsPage')
  )
  const SettingsPage = lazy(
    () => import('../modules/pop-monitoring-system/pages/settingsPage/SettingsPage')
  )

  const PDBInfo = lazy(
    () => import('../modules/pop-monitoring-system/pages/pop-devices/PDBInfo/PDBInfo')
  )

  const RectifierInfo = lazy(
    () => import('../modules/pop-monitoring-system/pages/pop-devices/PDBInfo/RectifierInfo')
  )

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        {/* Lazy Modules */}

        <Route
          path='/pop-list'
          element={
            <SuspensedView>
              <PopListPage />
            </SuspensedView>
          }
        />
        <Route
          path='/pop-details/:popId'
          element={
            <SuspensedView>
              <PopDetailsPage />
            </SuspensedView>
          }
        />
        <Route
          path='/pop-details'
          element={
            <SuspensedView>
              <PopDetailsPage />
            </SuspensedView>
          }
        />
        <Route
          path='/pop-details/pop-devices/pdb-info'
          element={
            <SuspensedView>
              <PDBInfo />
            </SuspensedView>
          }
        />
        <Route
          path='/pop-details/pop-devices/rectifier-info'
          element={
            <SuspensedView>
              <RectifierInfo />
            </SuspensedView>
          }
        />
        <Route
          path='/settings'
          element={
            <SuspensedView>
              <SettingsPage />
            </SuspensedView>
          }
        />

        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  // const baseColor = getCSSVariableValue('--kt-primary')
  // TopBarProgress.config({
  //   barColors: {
  //     '0': baseColor,
  //   },
  //   barThickness: 1,
  //   shadowBlur: 5,
  // })
  // return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
