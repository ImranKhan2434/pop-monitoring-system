import React from 'react'
import './Spinner.scss'

const Spinner = () => {
  return (
    <div className='full-page-loading-spinner'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Spinner
