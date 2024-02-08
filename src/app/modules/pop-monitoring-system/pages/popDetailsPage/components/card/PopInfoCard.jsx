import {FaLocationDot} from 'react-icons/fa6'

const PopInfoCard = ({info, setShow}) => {
  return (
    <section className='card p-5 shadow'>
      <h2 className='text-info'>Details of {info?.name}</h2>
      <div className='row font-14 fw-semibold mt-3'>
        <div className='col-md-6'>
          <div className='mb-1'>Id: {info?.code}</div>
          <div className='mb-1'>PoP Name: Badda PoP</div>
          <div>
            Alarm:{' '}
            {info?.status === 'CRITICAL' && <span className='badge bg-danger'>Critical</span>}
            {info.status === 'MAJOR' && <span className='badge bg-success'>Major</span>}
            {info.status === 'MINOR' && <span className='badge bg-primary'>Minor</span>}
          </div>
        </div>
        <div className='col-md-6'>
          <div className='mb-1'>PoP Address: Merul Badda, Dhaka</div>
          <div className='cursor-pointer' onClick={() => setShow(true)}>
            Location on Map:{' '}
            <span className='font-17 text-primary'>
              <FaLocationDot />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopInfoCard
