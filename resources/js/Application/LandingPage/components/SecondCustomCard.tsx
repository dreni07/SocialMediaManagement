import React from 'react'
import { Switch } from "@/components/ui/switch"

const SecondCustomCard = () => {
  return (
    <div className="h-[350px] w-[300px] bg-white border-1 border-[#C081FA] rounded-sm shadow-md flex justify-center items-center opacity-75 scale-90">
        <div className="h-[90%] w-[90%]">
            <div className="w-full text-center">
                <h1 className="font-outfit font-bold text-[#18003e]">Book Meeting With Dren</h1>
            </div>

            <div className="mt-5 w-full flex justify-center items-center gap-5">
                <p className="text-[#333] font-outfit opacity-75">What time works best</p>
                <Switch className="cursor-pointer"/>
            </div>

            <div className="mt-5 w-full flex flex-col items-center">
              <div className="my-2 h-[40px] w-[90%] bg-[#18003e] rounded-full flex justify-center items-center">
                <p className="font-outfit font-light text-white">08:30</p>
              </div>

              <div className="my-2 h-[40px] w-[90%] bg-transparent border border-[#18003e] rounded-full flex justify-center items-center">
                <p className="font-outfit font-light text-[#18003e]">10:20</p>
              </div>

              
              <div className="my-2 h-[40px] w-[90%] bg-transparent border border-[#18003e] rounded-full flex justify-center items-center">
                <p className="font-outfit font-light text-[#18003e]">11:30</p>
              </div>


              <div className="my-2 h-[40px] w-[90%] bg-transparent border border-[#18003e] rounded-full flex justify-center items-center">
                <p className="font-outfit font-light text-[#18003e]">12:00</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SecondCustomCard