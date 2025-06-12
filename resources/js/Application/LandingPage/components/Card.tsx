import React,{useRef,useState} from 'react'
import type { Card as CardType,CurrentCardState } from '../types'
import {motion,useInView} from 'framer-motion';
import useCurrentCard from '../stores/useCurrentCard';
import useModalState from '../stores/useModal';


interface SingleCardProps {
    single_card:CardType,
    timeout:number,
    index:number
}

const Card = ({single_card,timeout,index}:SingleCardProps) => {
    const card_ref = useRef(null);

    const isInView = useInView(card_ref,{once:false,margin:"-100px"});

    const marginTeller = index % 2 !== 0 ? 100 - (index * 50) : 0;

    const setModalOpen = useModalState((state) => state.setIsOpen);
    const setCurrentCard = useCurrentCard((state) => state.setCurrentCard);


  return (
    <motion.div 
        ref={card_ref} 
        className="h-[400px] w-[300px] gray-color shadow-sm rounded-sm cursor-pointer hover:transform hover:translate-y-[-10px] transition duration-200"
        initial={{opacity:0,y:50}}
        animate={isInView && {opacity:1,y:0}}
        transition={{duration:timeout,ease:'easeInOut'}}
        style={{
            marginTop:marginTeller
        }}
    >
        {/* <img src={single_card.card_image}/> */}


        <div className="w-full flex justify-center">
            <div className="mt-2 w-[90%] h-[230px] bg-white shadow-sm">
                <img src={single_card.card_image} className="w-full h-full"/>
            </div>
        </div>

        <div className="ml-4 mt-2">
            <h1 className="font-outfit font-bold text-[#333]">{single_card.card_title}</h1>
        </div>

        <div className="ml-4 mt-2">
            <p className="font-outfit opacity-75 text-xs">{single_card.card_description}</p>
        </div>

        <div className="ml-4 mt-2">
            <button 
                className="px-5 py-1 bg-[#6a00ff] text-white font-outfit rounded-md cursor-pointer"
                onClick={() => {
                    setModalOpen(true);
                    setCurrentCard(index);
                }}
            >
                View Details
            </button>
        </div>
    </motion.div>
  )
}

export default Card