import Spinner from '../../../spinner/Spinner'

const SectionHeader = ({title, color}) => {
  return (
    <section className='row'>
      <div className='col-12'>
        <div className='card p-5 pb-2 shadow'>
          <div className='d-flex justify-content-between align-items-center'>
            <div style={{color: color}} className='card-label fw-bold fs-2'>
              {title}
            </div>
            <select>
              <option value='TODAY'>Today</option>
            </select>
          </div>
          <div className='my-91'>
            <Spinner />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHeader
