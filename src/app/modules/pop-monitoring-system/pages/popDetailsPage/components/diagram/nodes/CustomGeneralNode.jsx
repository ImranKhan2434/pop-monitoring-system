import {memo} from 'react'
import {Handle, Position} from 'reactflow'

export default memo(({data}) => {
  return (
    <main
      style={{minWidth: '145px'}}
      className='py-2 px-6 d-flex flex-column justify-content-center align-items-center'
    >
      <Handle
        type='target'
        position={Position.Left}
        id='general-target'
        // style={{background: '#0CCE0C'}}
      />
      <div className='font-15 fw-bold'>{data.label}</div>
      {data.deviceType === 'Energy Meter' && <div className='font-13'>{data.deviceType}</div>}
      {data.deviceType === 'Breaker' && (
        <div>
          <span className='badge bg-warning text-white'>
            <span className='font-13'>On/Off</span>
          </span>
        </div>
      )}
      <div className='font-13'>Voltage: {data.voltage}</div>
      <div className='font-13'>Current: {data.current}</div>
      <Handle
        type='source'
        position={Position.Right}
        id='general-source'
        // style={{background: '#0CCE0C'}}
      />
    </main>
  )
})
