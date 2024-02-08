import {memo} from 'react'
import {Handle, Position} from 'reactflow'

export default memo(({data}) => {
  return (
    <main className='py-2 px-6 d-flex flex-column justify-content-center align-items-center'>
      <div className='font-15 fw-bold'>{data.label}</div>
      <div className='font-13'>{data.deviceType}</div>
      <div className='font-13'>Voltage: {data.voltage}</div>
      <div className='font-13'>Current: {data.current}</div>
      <Handle
        type='source'
        position={Position.Right}
        id='input-source'
        // style={{background: '#0CCE0C', fontSize: '20px'}}
      />
    </main>
  )
})
