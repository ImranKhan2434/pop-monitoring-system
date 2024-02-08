import {useState} from 'react'
// import {filterBySearchKey} from '../../../../../../../_sos/utils/filterBySearchKey'
import './Table.scss'
import Spinner from '../../../../spinner/Spinner'

const Table = ({tableData, isLoading}) => {
  // const [searchKey, setSearchKey] = useState('')
  return (
    <section className='details-table'>
      {/* <TableSearchBar
        tableName='PoP List'
        tableData={tableData}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
      /> */}
      {isLoading ? (
        <div className='my-60'>
          <Spinner />
        </div>
      ) : (
        <div className='scrollable-table'>
          <table className='table table-striped table-hover border border-1'>
            <thead>
              <tr className='bg-primary text-white'>
                <th>Status</th>
                <th>PoP ID</th>
                <th>PoP Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <td>
                    {data.status === 'CRITICAL' && (
                      <span className='badge bg-danger'>Critical</span>
                    )}
                    {data.status === 'MAJOR' && <span className='badge bg-success'>Major</span>}
                    {data.status === 'MINOR' && <span className='badge bg-primary'>Minor</span>}
                  </td>
                  <td>{data.code}</td>
                  <td>Badda PoP</td>
                  <td>Merul Badda, Dhaka</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Table
