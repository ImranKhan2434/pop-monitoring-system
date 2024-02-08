import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {errorToast, successToast} from '../../../../../_sos/utils/toastService'
import {getSwitchControl} from '../../api/energyMonitoring'
import {useContext} from 'react'
import {DeviceListContext} from '../../../../context/DeviceListContext'

const LoadModal = ({show, setShow, isChecked, setChecked}) => {
  const {tuyaDeviceCode} = useContext(DeviceListContext)
  const handleSaveChanges = async () => {
    const status = isChecked ? 0 : 1
    setShow(false)
    try {
      const data = await getSwitchControl(tuyaDeviceCode, status)
      if (!isChecked) successToast('Load is Turned On!')
      if (isChecked) successToast('Load is Turned Off!')
      setChecked((prev) => !prev)
    } catch (error) {
      console.log(error)
      errorToast(error)
    }
  }
  return (
    <main className='load-modal'>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className='text-info fw-bold fs-1'>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body className='fw-bold fs-2'>
          You Want to Turn {isChecked ? 'Off' : 'On'} the Load!
        </Modal.Body>
        <Modal.Footer>
          <Button className='fw-bold' variant='danger' size='sm' onClick={() => setShow(false)}>
            No
          </Button>
          <Button className='fw-bold' variant='primary' size='sm' onClick={handleSaveChanges}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  )
}

export default LoadModal
