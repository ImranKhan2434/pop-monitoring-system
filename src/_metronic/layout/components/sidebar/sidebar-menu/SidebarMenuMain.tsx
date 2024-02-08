/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
// import {KTSVG} from '../../../../helpers'
// import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        // icon='/media/icons/duotune/art/art002.svg'
        icon='/media/icons/duotune/art/laptop-solid.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
        bg='icon-bg'
      />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-white text-uppercase fs-8 ls-1'>Pages</span>
        </div>
      </div>

      <SidebarMenuItem
        to='/settings'
        icon='/media/icons/duotune/art/settings.svg'
        title='Settings'
        fontIcon='bi-layers'
        bg='icon-bg'
      />

      <SidebarMenuItem
        to='/pop-details'
        icon='/media/icons/duotune/art/pop-details.svg'
        title='PoP Details'
        fontIcon='bi-layers'
        bg='icon-bg'
      />

      {/* <SidebarMenuItemWithSub
        to='/air-quality-details'
        title='Air Quality'
        icon='/media/icons/duotune/art/wind-solid.svg'
        fontIcon='bi-layers'
        bg='icon-bg'
      >
        <SidebarMenuItem to='/air-quality-details/general' title='General' hasBullet={true} />
        <SidebarMenuItem to='/air-quality-details/combined' title='Combined' hasBullet={true} />
      </SidebarMenuItemWithSub> */}
    </>
  )
}

export {SidebarMenuMain}
