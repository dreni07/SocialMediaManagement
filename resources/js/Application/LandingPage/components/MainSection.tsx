import React from 'react'
import { Calendar } from '@/components/ui/calendar'
import CustomCard from './CustomCard'
import SecondCustomCard from './SecondCustomCard'
import { Star } from 'lucide-react';


const MainSection = () => {
  return (
    <div className="w-screen h-[600px] mt-15">
        <div className="mt-10 w-screen text-center relative">
            <div className="absolute top-[-30%] left-[50%] w-[300px] h-[30px] bg-white shadow-lg transform -translate-x-1/2 rounded-full flex items-center justify-between">
                <div className="ml-2 flex items-center gap-1">
                    <Star className="filled-star"/>
                    <Star className="filled-star"/>
                    <Star className="filled-star"/>
                    <Star className="filled-star"/>
                    <Star className="filled-star"/>
                </div>

                <p className="mr-4 font-outfit text-[#18003e]">1200+ Reviews</p>
            </div>
            <h1 className="font-outfit font-bold text-5xl dark-purple-color">Social media management<br></br>
            simplified with us</h1>

            <p className="pt-2 font-outfit opacity-75 text-sm">Effortlessly manage your social media with our platform. We simplify<br/> the process, letting you focus on engaging with your audience and growing your brand.</p>

            <button className="mt-5 px-7 py-2 dark-purple text-white font-outfit cursor-pointer shadow-sm first-element absolute transform -translate-x-1/2 rounded-full">Start for free</button>
        </div>

        <div className="mt-30 relative w-screen flex justify-center gap-2">
            <div className="opacity-75 scale-90">
                <Calendar
                    mode="single"
                    className="custom-calendar rounded-lg border-1 border-[#C081FA] font-outfit"
                />

            </div>

            <div>
                <CustomCard/>
            </div>

            <div>
                <SecondCustomCard/>
            </div>
        </div>
    </div>
  )
}

export default MainSection