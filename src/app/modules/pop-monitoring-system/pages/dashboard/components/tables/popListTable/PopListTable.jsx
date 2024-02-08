import {useState} from 'react'
import TableSearchBar from '../../tableSearchBar/TableSearchBar'
import {filterBySearchKey} from '../../../../../../../../_sos/utils/filterBySearchKey'
import {useNavigate} from 'react-router-dom'
import './PopListTable.scss'
import Spinner from '../../../../../../spinner/Spinner'

const PopListTable = ({tableData, isLoading}) => {
  const navigate = useNavigate()
  const [searchKey, setSearchKey] = useState('')

  const handelRowClick = (info) => {
    console.log(info)
    navigate(`/pop-details/${info.id}`, {state: {info}})
  }

  return (
    <section className='card shadow p-5 pop-list-table'>
      <TableSearchBar
        tableName='PoP List'
        tableData={tableData}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
      />
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
              {filterBySearchKey(tableData, searchKey).map((data) => (
                <tr key={data.id} className='cursor-pointer' onClick={() => handelRowClick(data)}>
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

export default PopListTable
