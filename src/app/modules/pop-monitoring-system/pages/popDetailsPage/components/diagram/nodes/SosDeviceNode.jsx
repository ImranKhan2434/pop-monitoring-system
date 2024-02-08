import {memo} from 'react'
import {Handle, Position} from 'reactflow'

export default memo(({data}) => {
  return (
    <main>
      <Handle
        type='source'
        position={Position.Left}
        id='sos-device-left'
        // style={{background: '#0CCE0C'}}
      />
      <section>{data?.label}</section>
      <Handle
        type='source'
        position={Position.Right}
        id='sos-device-right'
        // style={{background: '#0CCE0C'}}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='sos-device-bottom'
        style={{left: '15%'}}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='sos-device-bottom-2'
        style={{left: '85%'}}
      />
      {/* <Handle
        type='source'
        position={Position.Top}
        id='sos-device-top'
        // style={{background: '#0CCE0C'}}
      /> */}
    </main>
  )
})
