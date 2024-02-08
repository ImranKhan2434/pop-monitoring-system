import ReactFlow, {useNodesState, useEdgesState, Background} from 'reactflow'
import DiagramHeader from './nodes/DiagramHeader'
import CustomInputNode from './nodes/CustomInputNode'
import CustomGeneralNode from './nodes/CustomGeneralNode'
import './DiagramContainer.scss'
import SosDeviceNode from './nodes/SosDeviceNode'
import {useNavigate} from 'react-router-dom'

const nodeTypes = {
  customInputNode: CustomInputNode,
  customGeneralNode: CustomGeneralNode,
  sosDeviceNode: SosDeviceNode,
}
const defaultViewport = {x: 10, y: 30, zoom: 0.5}

const DiagramContainer = () => {
  const navigate = useNavigate()
  const initialNodes = [
    {
      id: 'pdb',
      type: 'customInputNode',
      data: {
        label: 'PDB/ATS',
        voltage: '230V',
        current: '15A',
      },
      position: {x: 120, y: 215},
      style: {
        background: '#4472C4',
        color: 'white',
      },
    },
    {
      id: 'rectifier',
      type: 'customGeneralNode',
      data: {
        label: 'Rectifier',
        voltage: '230V',
        current: '.97A',
      },
      position: {x: 360, y: 215},
      style: {background: '#4472C4', color: 'white'},
    },
    {
      id: 'box',
      type: 'output',
      targetPosition: 'left',
      position: {x: 620, y: 142.5},
      style: {backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 130, height: 220},
    },
    {
      id: 'router',
      data: {label: 'Router'},
      position: {x: 25, y: 40},
      parentNode: 'box',
      style: {
        width: 80,
        height: 50,
        // borderWidth: 2,
      },
      className: 'hide-connector',
    },
    {
      id: 'switch',
      data: {label: 'Switch'},
      position: {x: 25, y: 140},
      parentNode: 'box',
      style: {
        width: 80,
        height: 50,
      },
      className: 'hide-connector',
    },
    {
      id: 'door',
      type: 'output',
      targetPosition: 'top',
      data: {
        label: 'Door',
      },
      position: {x: 0, y: 280},
      style: {
        width: 70,
        height: 130,
        background: '#4472C4',
        color: 'white',
        boxShadow: '6px 6px 0 1px rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    {
      id: 'sos-device',
      type: 'sosDeviceNode',
      data: {
        label: 'SOS Device',
      },
      position: {x: 300, y: 20},
      style: {
        width: 130,
        height: 45,
        background: '#4472C4',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    {
      id: 'temp-sensor',
      type: 'output',
      targetPosition: 'left',
      data: {label: 'Temperature Sensor'},
      position: {x: 500, y: 23},
      style: {
        background: '#4472C4',
        color: 'white',
      },
    },
    {
      id: 'smoke-sensor',
      type: 'output',
      targetPosition: 'top',
      data: {label: 'Smoke Sensor'},
      position: {x: 430, y: 112},
      style: {
        background: '#4472C4',
        color: 'white',
      },
    },
    {
      id: 'humidity-sensor',
      type: 'output',
      targetPosition: 'top',
      data: {label: 'Humidity Sensor'},
      position: {x: 150, y: 112},
      style: {
        background: '#4472C4',
        color: 'white',
      },
    },
  ]

  const initialEdges = [
    {
      id: 'pdb-to-rectifier',
      source: 'pdb',
      type: 'smoothstep',
      target: 'rectifier',
      animated: true,
      style: {stroke: 'red', strokeWidth: '1.5'},
    },
    {
      id: 'rectifier-to-box',
      source: 'rectifier',
      type: 'smoothstep',
      target: 'box',
      animated: true,
      style: {stroke: 'red', strokeWidth: '1.5'},
    },
    {
      id: 'device-to-temp',
      source: 'sos-device',
      type: 'smoothstep',
      target: 'temp-sensor',
      sourceHandle: 'sos-device-right',
      // animated: true,
      // style: {stroke: 'green', strokeWidth: '1.5'},
    },
    {
      id: 'device-to-smoke',
      source: 'sos-device',
      type: 'smoothstep',
      target: 'smoke-sensor',
      sourceHandle: 'sos-device-bottom-2',
      // animated: true,
      // style: {stroke: 'green', strokeWidth: '1.5'},
    },
    {
      id: 'device-to-hum',
      source: 'sos-device',
      type: 'smoothstep',
      target: 'humidity-sensor',
      sourceHandle: 'sos-device-bottom',
      // animated: true,
      // style: {stroke: 'green', strokeWidth: '1.5'},
    },
    {
      id: 'device-to-door',
      source: 'sos-device',
      type: 'smoothstep',
      target: 'door',
      sourceHandle: 'sos-device-left',
      // animated: true,
      // style: {stroke: 'green', strokeWidth: '1.5'},
    },
  ]
  const [nodes, _, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onNodeClick = (event, node) => {
    if (node.id === 'pdb') {
      navigate(`/pop-details/pop-devices/${node.id}-info`)
    } else if (node.id === 'rectifier') {
      navigate(`/pop-details/pop-devices/${node.id}-info`)
    }
  }

  return (
    <div className='diagram-container'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        fitView
        attributionPosition='bottom-left'
        // zoomOnScroll={false}
        // panOnScroll={false}
        // preventScrolling={false}
        nodesDraggable={false}
        defaultViewport={defaultViewport}
      >
        <DiagramHeader />
        <Background color='blue' variant='dots' />
      </ReactFlow>
    </div>
  )
}

export default DiagramContainer
