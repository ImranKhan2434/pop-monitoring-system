import React from 'react'
import {Panel} from 'reactflow'

const DiagramHeader = () => {
  return (
    <main className='diagram-header'>
      <Panel position='top-left'>
        <h2 className='text-info'>PoP Details Diagram</h2>
      </Panel>
    </main>
  )
}

export default DiagramHeader
