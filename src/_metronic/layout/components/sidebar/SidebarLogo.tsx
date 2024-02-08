import {Link} from 'react-router-dom'
import clsx from 'clsx'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {useLayout} from '../../core'
import {useState} from 'react'

const SidebarLogo = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const {config} = useLayout()
  const appSidebarDefaultMinimizeDesktopEnabled =
    config?.app?.sidebar?.default?.minimize?.desktop?.enabled
  const appSidebarDefaultCollapseDesktopEnabled =
    config?.app?.sidebar?.default?.collapse?.desktop?.enabled
  const toggleType = appSidebarDefaultCollapseDesktopEnabled
    ? 'collapse'
    : appSidebarDefaultMinimizeDesktopEnabled
    ? 'minimize'
    : ''
  const toggleState = appSidebarDefaultMinimizeDesktopEnabled ? 'active' : ''
  const appSidebarDefaultMinimizeDefault = config.app?.sidebar?.default?.minimize?.desktop?.default
  return (
    <div className='app-sidebar-logo px-6' id='kt_app_sidebar_logo'>
      <Link to='/dashboard' className='logo-container'>
        {config.layoutType === 'dark-sidebar' ? (
          <>
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/logo.png')}
              className='h-25px app-sidebar-logo-default irs-logo'
            />
            {!toggleSidebar && <div>{/* <span className='logo-text'>E-Assets</span> */}</div>}
          </>
        ) : (
          <>
            <img
              alt='Logo'
              src={toAbsoluteUrl('')}
              className='h-25px app-sidebar-logo-default theme-light-show'
            />
            <img
              alt='Logo'
              src={toAbsoluteUrl('')}
              className='h-25px app-sidebar-logo-default theme-dark-show'
            />
          </>
        )}

        <img
          alt='Logo'
          src={toAbsoluteUrl('/media/logos/logo-min.png')}
          className='h-20px app-sidebar-logo-minimize minimize-logo'
        />
        {/* <h1 className='h-20px app-sidebar-logo-minimize minimize-logo text-white align-items center'>
          E
        </h1> */}
      </Link>

      {(appSidebarDefaultMinimizeDesktopEnabled || appSidebarDefaultCollapseDesktopEnabled) && (
        <div
          onClick={() => setToggleSidebar(!toggleSidebar)}
          id='kt_app_sidebar_toggle'
          className={clsx(
            'app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate bg-white',
            {active: appSidebarDefaultMinimizeDefault}
          )}
          data-kt-toggle='true'
          data-kt-toggle-state={toggleState}
          data-kt-toggle-target='body'
          data-kt-toggle-name={`app-sidebar-${toggleType}`}
        >
          <KTSVG path='/media/icons/duotune/arrows/arr079.svg' className='svg-icon-2 rotate-180' />
        </div>
      )}
    </div>
  )
}

export {SidebarLogo}
