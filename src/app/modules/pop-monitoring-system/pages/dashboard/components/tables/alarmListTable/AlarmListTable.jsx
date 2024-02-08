import {useEffect, useState} from 'react'
import './AlarmListTable.scss'
import Spinner from '../../../../../../spinner/Spinner'

const AlarmListTable = ({tableData, isLoading}) => {
  console.log(tableData)
  const [isCriticalChecked, setCriticalChecked] = useState(false)
  const [isMajorChecked, setMajorChecked] = useState(false)
  const [isMinorChecked, setMinorChecked] = useState(false)

  const getFilteredData = (data) => {
    let statusArr = []

    if (
      (isCriticalChecked && isMajorChecked && isMinorChecked) ||
      (!isCriticalChecked && !isMajorChecked && !isMinorChecked)
    ) {
      statusArr = ['CRITICAL', 'MAJOR', 'MINOR']
    }
    if (!isCriticalChecked && isMajorChecked && isMinorChecked) {
      statusArr = ['MAJOR', 'MINOR']
    }
    if (!isCriticalChecked && !isMajorChecked && isMinorChecked) {
      statusArr = ['MINOR']
    }
    if (isCriticalChecked && !isMajorChecked && !isMinorChecked) {
      statusArr = ['CRITICAL']
    }
    if (isCriticalChecked && isMajorChecked && !isMinorChecked) {
      statusArr = ['CRITICAL', 'MAJOR']
    }
    if (isCriticalChecked && !isMajorChecked && isMinorChecked) {
      statusArr = ['CRITICAL', 'MINOR']
    }
    if (!isCriticalChecked && isMajorChecked && !isMinorChecked) {
      statusArr = ['MAJOR']
    }

    return data.filter((row) => {
      return statusArr.includes(row.status)
    })
  }

  return (
    <main className='card shadow p-5 alarm-list-table'>
      <div className='fw-bold fs-3 mb-3'>Alarm List</div>
      <section>
        <div className='btn-group' role='group' aria-label='Basic checkbox toggle button group'>
          <input
            type='checkbox'
            className='btn-check'
            id='btncheck1'
            autoComplete='off'
            checked={isCriticalChecked}
            onChange={() => setCriticalChecked(!isCriticalChecked)}
          />
          <label
            className={`btn btn-sm btn-outline-primary ${isCriticalChecked ? 'text-white' : ''}`}
            htmlFor='btncheck1'
          >
            Critical
          </label>
          <input
            type='checkbox'
            className='btn-check'
            id='btncheck2'
            autoComplete='off'
            checked={isMajorChecked}
            onChange={() => setMajorChecked(!isMajorChecked)}
          />
          <label
            className={`btn btn-sm btn-outline-primary ${isMajorChecked ? 'text-white' : ''}`}
            htmlFor='btncheck2'
          >
            Major
          </label>
          <input
            type='checkbox'
            className='btn-check'
            id='btncheck3'
            autoComplete='off'
            checked={isMinorChecked}
            onChange={() => setMinorChecked(!isMinorChecked)}
          />
          <label
            className={`btn btn-sm btn-outline-primary ${isMinorChecked ? 'text-white' : ''}`}
            htmlFor='btncheck3'
          >
            Minor
          </label>
        </div>
      </section>
      {isLoading ? (
        <div className='my-60'>
          <Spinner />
        </div>
      ) : (
        <div className='scrollable-table mt-1'>
          <table className='table table-striped table-hover border border-1'>
            <thead>
              <tr className='bg-primary text-white'>
                <th>Status</th>
                <th>Description</th>
                <th>Value</th>
                <th>Limit</th>
                <th>Alarm Group</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredData(tableData)?.map((data) => (
                <tr key={data.id}>
                  <td>
                    {data.status === 'CRITICAL' && (
                      <span className='badge bg-danger'>Critical</span>
                    )}
                    {data.status === 'MAJOR' && <span className='badge bg-success'>Major</span>}
                    {data.status === 'MINOR' && <span className='badge bg-primary'>Minor</span>}
                  </td>
                  <td>Nothing to worry about</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>{data.code}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}

export default AlarmListTable
