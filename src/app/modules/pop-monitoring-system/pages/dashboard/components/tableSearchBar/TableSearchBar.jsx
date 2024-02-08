import './TableSearchBar.scss'

const TableSearchBar = ({tableName, searchKey, setSearchKey}) => {
  return (
    <div className='mb-2 table-search-bar'>
      <div className='fw-bold fs-3 mb-1'>{tableName}</div>
      <div className='search-box'>
        <input
          placeholder='Search'
          className='form-control'
          type='text'
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          id='search-input'
        />
        <span className='set-icon-position'>
          <i className='fa fa-search'></i>
        </span>
      </div>
    </div>
  )
}

export default TableSearchBar
