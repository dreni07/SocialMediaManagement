import React from 'react'

interface BluryBackgroundProps {
  className:string
}

const BluryBackground = ({className}:BluryBackgroundProps) => {
  return (
    <div className={className}/>
  )
}

export default BluryBackground