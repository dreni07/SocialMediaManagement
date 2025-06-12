import React,{useState,useEffect,useRef} from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
    title:string,
    containerClass:string,
    textClassName:string
}

const AnimatedTitle = ({title,containerClass,textClassName}:AnimatedTitleProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const titleAnimation = gsap.timeline({
                scrollTrigger:{
                    trigger:containerRef.current,
                    start:"50 bottom",
                    end:"center bottom",
                    toggleActions:"play none none reverse"
                }
            });

            titleAnimation.to(".animated-word",
                {
                opacity:1,
                transform:"translate3d(0,0,0) rotateY(0deg) rotateX(0deg)"
                },
                0
            )
        })

        return () => ctx.revert();
    },[]);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
        {title.split("<br/>").map((line:string,index:number) => {
            return (
                <div key={index} className="flex justify-center items-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                    {line.split(' ').map((word:string,index:number) => {
                        return (
                            <span className={`${textClassName} animated-word`} key={index} dangerouslySetInnerHTML={{__html:word}}/>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default AnimatedTitle