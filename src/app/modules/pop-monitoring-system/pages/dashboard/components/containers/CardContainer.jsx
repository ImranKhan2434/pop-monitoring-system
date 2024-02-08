import {useState} from 'react'
import Spinner from '../../../../../spinner/Spinner'
import Card from '../card/Card'
import {BsInboxFill} from 'react-icons/bs'
import {PiWarningOctagonBold} from 'react-icons/pi'
import {IoCloudOfflineSharp} from 'react-icons/io5'
import {MdOutlineCellTower} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

const CardContainer = ({popList, isLoading}) => {
  const navigate = useNavigate()

  const handelNavigation = (title, data, color) => {
    if (!data) return
    navigate('/pop-list', {state: {title, data, color}})
  }
  return (
    <main className='card shadow p-5 power-card-container'>
      {isLoading ? (
        <div className='my-50'>
          <Spinner />
        </div>
      ) : (
        <>
          <div className='fw-bold fs-3 mb-3'>PoP Overview</div>
          <div className='d-flex justify-content-between align-items-center'>
            <Card
              title='Total PoP'
              data={popList.length}
              color='#0D6EFD'
              borderColor='#d6e1fb'
              cardBg='#f7f9fe'
              icon={<BsInboxFill />}
              handelNavigation={handelNavigation}
            />
            <Card
              title='PoP Online'
              data={popList.length}
              color='#0CCE0C'
              borderColor='#cef5ce'
              cardBg='#f8fef8'
              icon={<MdOutlineCellTower />}
              handelNavigation={handelNavigation}
            />
            <Card
              title='PoP Offline'
              data={0}
              color='#e60101'
              borderColor='#facccc'
              cardBg='#fef8f8'
              icon={<IoCloudOfflineSharp />}
              handelNavigation={handelNavigation}
            />
            <Card
              title='PoP Warning'
              data={0}
              color='#ffa500'
              borderColor='#ffedcc'
              cardBg='#fffcf8'
              icon={<PiWarningOctagonBold />}
              handelNavigation={handelNavigation}
            />
            {/* <Card
              title='Something'
              data={40}
              color='#336AEA'
              borderColor='#d6e1fb'
              cardBg='#f7f9fe'
            /> */}
          </div>
        </>
      )}
    </main>
  )
}

export default CardContainer
