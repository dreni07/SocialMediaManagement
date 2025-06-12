import React from 'react'
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
const CustomCard = () => {
  return (
    <div className="w-[300px] h-[250px] bg-white flex items-center justify-center shadow-md custom-border rounded-sm cursor-pointer border-1 border-[#C081FA] scale-105">
        <div className="w-[90%] h-[90%] relative">
            <h1 className="font-outfit font-bold text-[#18003e]">Type Of Post</h1>

            <div className="mt-5">
                <div className="my-4 flex items-center gap-2">
                    <Checkbox className="border-2 border-[#18003e]"/>
                    <div className="flex flex-col">
                        <label className="dark-purple-color font-outfit">Post Right Now</label>
                        <label className="font-outfit opacity-75 text-xs">Use this to post to social media immediatly!</label>
                    </div>
                </div>

                <div className="my-4 flex items-center gap-2">
                    <Checkbox className="border-2 border-[#18003e] opacity-75"/>
                    <div className="flex flex-col">
                        <label className="dark-purple-color font-outfit opacity-75 font-sm">Schedule Posts</label>
                    </div>
                </div>
            </div>

            <div className="w-full absolute bottom-0">
                <Input placeholder="Post with AI" className="w-full input-border rounded-full font-outfit"/>
                <Button className="dark-button h-[30px] w-[30px] absolute top-[50%] right-[5%] transform -translate-y-1/2 rounded-full flex justify-center items-center cursor-pointer">
                    <Send/>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default CustomCard