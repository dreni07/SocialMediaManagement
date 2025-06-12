import React from 'react'
import AnimatedTitle from './AnimatedTitle'


const SomeFeatures = () => {
  return (
    <div className="w-full h-[500px]">
        <AnimatedTitle title="Some Features" containerClass={"mt-5 text-center font-bold font-outfit uppercase leading-[0.8] text-[#333]"} textClassName='text-6xl'/>


        <div className="mt-15 w-full flex justify-center">
            <div className="w-[90%] flex justify-between items-center">
                <div className="h-[300px] w-[400px] flex items-center justify-center gray-color custom-shadow border-2 cursor-pointer">
                    <div className="h-[90%] w-[90%]">
                        <div className="h-[45px] w-[45px] flex justify-center items-center dark-purple shadow-sm rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-[20px] w-[20px] white-color"><path d="M248 106.6c18.9-9 32-28.3 32-50.6c0-30.9-25.1-56-56-56s-56 25.1-56 56c0 22.3 13.1 41.6 32 50.6l0 98.8c-2.8 1.3-5.5 2.9-8 4.7l-80.1-45.8c1.6-20.8-8.6-41.6-27.9-52.8C57.2 96 23 105.2 7.5 132S1.2 193 28 208.5c1.3 .8 2.6 1.5 4 2.1l0 90.8c-1.3 .6-2.7 1.3-4 2.1C1.2 319-8 353.2 7.5 380S57.2 416 84 400.5c19.3-11.1 29.4-32 27.8-52.8l50.5-28.9c-11.5-11.2-19.9-25.6-23.8-41.7L88 306.1c-2.6-1.8-5.2-3.3-8-4.7l0-90.8c2.8-1.3 5.5-2.9 8-4.7l80.1 45.8c-.1 1.4-.2 2.8-.2 4.3c0 22.3 13.1 41.6 32 50.6l0 98.8c-18.9 9-32 28.3-32 50.6c0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.3-13.1-41.6-32-50.6l0-98.8c2.8-1.3 5.5-2.9 8-4.7l80.1 45.8c-1.6 20.8 8.6 41.6 27.8 52.8c26.8 15.5 61 6.3 76.5-20.5s6.3-61-20.5-76.5c-1.3-.8-2.7-1.5-4-2.1l0-90.8c1.4-.6 2.7-1.3 4-2.1c26.8-15.5 36-49.7 20.5-76.5S390.8 96 364 111.5c-19.3 11.1-29.4 32-27.8 52.8l-50.6 28.9c11.5 11.2 19.9 25.6 23.8 41.7L360 205.9c2.6 1.8 5.2 3.3 8 4.7l0 90.8c-2.8 1.3-5.5 2.9-8 4.6l-80.1-45.8c.1-1.4 .2-2.8 .2-4.3c0-22.3-13.1-41.6-32-50.6l0-98.8z"/></svg>
                        </div>  

                        <h1 className="font-outfit font-bold mt-5 text-xl">Smart AI Suggestions</h1>

                        <div className="w-full">
                            <p className="max-w-md text-xs font-outfit opacity-75 mt-5">Our platform uses intelligent algorithms to suggest engaging captions, hashtags, and even reply ideas for your posts and comments. Whether you're crafting content or responding to followers, get context-aware suggestions that save time and boost interaction—no more staring at a blank screen.</p>
                        </div>
                    </div>
                </div>

                <div className="h-[300px] w-[400px] flex items-center justify-center gray-color custom-shadow border-2">
                    <div className="h-[90%] w-[90%]">
                        <div className="h-[45px] w-[45px] flex justify-center items-center dark-purple shadow-sm rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-[20px] w-[20px] white-color"><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/></svg>
                        </div>  

                        <h1 className="font-outfit font-bold mt-5 text-xl">Smart Scheduling</h1>

                        <div className="w-full">
                            <p className="max-w-md text-xs font-outfit opacity-75 mt-5">Plan your content in advance and let our system handle the rest. With Smart Scheduling, you can queue posts for multiple platforms and ensure they go live exactly when your audience is most active. No manual posting. No missed opportunities. Just consistent, stress-free social media.</p>
                        </div>
                    </div>
                </div>

                <div className="h-[300px] w-[400px] flex items-center justify-center gray-color custom-shadow border-2">
                    <div className="h-[90%] w-[90%]">
                        <div className="h-[45px] w-[45px] flex justify-center items-center dark-purple shadow-sm rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-[20px] w-[20px] white-color"><path d="M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z"/></svg>
                        </div>  

                        <h1 className="font-outfit font-bold mt-5 text-xl">Multiple Connections</h1>

                        <div className="w-full">
                            <p className="max-w-md text-xs font-outfit opacity-75 mt-5">Connect and control all your accounts—Instagram, Facebook, Twitter, LinkedIn, and more—through a single dashboard. No more switching tabs or logging in and out. Post, schedule, and engage across multiple platforms with ease and efficiency.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SomeFeatures