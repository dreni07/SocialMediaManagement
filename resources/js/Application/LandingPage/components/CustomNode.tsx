import React from 'react'
import { Handle,Position,NodeProps } from '@xyflow/react'
import type { CustomNodeData } from '../react-flow';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const CustomNode = ({data}:NodeProps<CustomNodeData>) => {
  return (
    <div className="h-[180px] w-[400px] light-purple-background shadow-sm rounded-sm">
        <Handle type="target" position={Position.Top}/>
        <div className="h-full w-full flex justify-center items-center">
            <div className="h-[90%] w-[90%] relative">
                <div className="absolute left-0 top-0 h-[40px] w-[40px] rounded-full flex justify-center items-center bg-[#18003e]">
                    <div dangerouslySetInnerHTML={{__html:data.icon}}/>
                </div>

                <div className="mt-2">
                    <h1 className="text-center font-outfit font-bold text-2xl py-2">{data.title}</h1>
                    <p className="text-center font-outfit text-md opacity-75">{data.description}</p>
                </div>

                <div className="mt-3">
                    
                <Tooltip>

                    <TooltipTrigger>
                        <button className="px-4 py-1 bg-[#0e0124] text-white font-anaheim font-light cursor-pointer">{data.title} Details</button>
                    </TooltipTrigger>

                    <TooltipContent>
                        <p className="font-outfit">{data.tooltip_content}</p>
                    </TooltipContent>

                </Tooltip>
                    

                </div>
            </div>
        </div>
        <Handle type="source" position={Position.Bottom}/>
    </div>
  )
}

export default CustomNode