import React,{useEffect} from 'react'
import {nodes,edges} from '../react-flow';
import { ReactFlow,Background,Controls,BackgroundVariant } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {motion} from 'framer-motion';
import useWillAnimate from '../stores/useWillAnimate';
import CustomNode from './CustomNode';

const nodeTypes = {
    custom: CustomNode,
};

const WorkFlowChart = () => {

    const willAnimate = useWillAnimate((state) => state.willAnimate);

  return (
    <motion.div 
        className="h-full w-full"
        initial={{opacity:0}}
        animate={willAnimate && {opacity:1}}
        transition={{duration:1.5}}
    >
        <ReactFlow 
            nodes={nodes} 
            edges={edges}
            nodeTypes={nodeTypes}
        >
            <Background variant={BackgroundVariant.Dots}/>
        </ReactFlow>
    </motion.div>
  )
}

export default WorkFlowChart