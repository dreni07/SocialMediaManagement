import React,{useEffect} from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all';
import { useGSAP } from '@gsap/react'
import ScrollDownArrow from './ScrollDownArrow';
import WorkFlowChart from './WorkFlowChart';
import useWillAnimate from '../stores/useWillAnimate';


gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {

    const setWillAnimate = useWillAnimate((state) => state.setWillAnimate);


    useGSAP(() => {

        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger:"#empty-box",
                start:"center center",
                end:"+=800 center",
                scrub:0.5,
                pin:true,
                pinSpacing:true
            }
        })

        clipAnimation.to("#workflow-chart",{
            width:"100vw",
            height:"100vh",
            backgroundColor:"#020004"
        });

        clipAnimation.to("#arrow-icon",
            {
                opacity:0,
            },
            "<"
        );

        clipAnimation.to("#workflow-chart",
            {
                display:"block",
                onStart:() => {
                    setWillAnimate(true);
                }
            },
            ">",
        )


    })

  return (
    <div className="w-screen h-[400px]">
        <div className="w-full text-center flex flex-col">
            <AnimatedTitle title="How It Works" containerClass={"mt-5 text-center font-bold font-outfit uppercase leading-[0.8] text-[#333]"} textClassName={"text-6xl"}/>
            <div id="empty-box" className="mt-5 h-full w-full flex justify-center items-center">
                <div id="workflow-chart" className="h-[300px] w-[400px] bg-transparent border-2 border-gray-500 relative">
                    <ScrollDownArrow/>
                    <div id="workflow-chart" className="w-full h-full hidden">
                        <WorkFlowChart/>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HowItWorks