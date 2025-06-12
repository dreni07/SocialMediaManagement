import React from 'react'
import BluryBackground from './BluryBackground'
import AnimatedTitle from './AnimatedTitle'
import Cards from './Cards'


const WhyUs = () => {
  return (
    <div className="w-screen h-[650px] bg-white">
        <div className="mt-20 h-full w-screen relative">
            <BluryBackground className="h-full w-full absolute top-0 blury-background blury"/>
            
            <div className="w-full text-center">
                <AnimatedTitle title="Why Plan AI" containerClass={"mt-5 text-center font-bold font-outfit uppercase leading-[0.8] text-[#333]"} textClassName={"text-6xl"}/>

                <AnimatedTitle title="The Best AI-Tool you can use to manage <br/> social media efficiently" containerClass={"text-center mt-2 text-[#333] opacity-75 font-outfit"} textClassName={"text-xs font-light"}/>
            </div>

            <div className="w-full h-[400px] flex justify-center">
                <Cards/>
            </div>  
        </div>
    </div>
  )
}

export default WhyUs