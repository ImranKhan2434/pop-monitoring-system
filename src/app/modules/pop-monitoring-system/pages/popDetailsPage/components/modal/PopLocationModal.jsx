import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './PopLocationModal.scss'
import Map from '../map/Map'

const PopLocationModal = ({show, setShow, info}) => {
  return (
    <main className='load-modal'>
      <Modal size='lg' show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className='text-info fw-bold fs-1'>Location of {info.name}</Modal.Title>
        </Modal.Header>
        <section className='px-4 py-4'>
          <Map />
        </section>

        <section className='px-4 d-flex justify-content-end pb-5'>
          <Button className='fw-bold' variant='danger' size='sm' onClick={() => setShow(false)}>
            Close
          </Button>
        </section>
      </Modal>
    </main>
  )
}

export default PopLocationModal
