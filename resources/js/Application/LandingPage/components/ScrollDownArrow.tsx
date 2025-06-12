import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid';


const ScrollDownArrow = () => {
  return (
    <div id="arrow-icon" className="flex justify-center mt-8 animate-bounce absolute top-[50%] left-[50%] transform -translate-1/2">   
        <ChevronDownIcon className="h-12 w-12 text-gray-600" id="arrow-icon"/>
    </div>
  )
}

export default ScrollDownArrow