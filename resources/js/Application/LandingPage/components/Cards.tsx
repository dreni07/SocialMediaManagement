import React,{useState} from 'react'
import Card from './Card'
import type { Card as CardType} from '../types';
import Illustration from '../../illustration.avif';
import SocialMediaScheduling from '../../SocialMediaScheduling.avif';
import CommentManagement from '../../comment_managment.avif';
import AIUsage from '../../AIUsage.avif';
import ModalPage from './ModalPage';
import useCurrentCard from '../stores/useCurrentCard';
import useModalState from '../stores/useModal';

const Cards = () => {


    const currentCard = useCurrentCard<number>((state) => state.currentCard);

    const cards_content:CardType[] = [
        {
          card_image: Illustration,
          card_title: "Post Once, Publish Everywhere",
          card_description: "Create your content once and instantly share it across all your social media channels. Save time and maintain consistency across Instagram, Facebook, Twitter, and more—without the extra effort.",
          longer_description: "Craft your message a single time and watch it automatically adapt to every platform you use. Whether you're running a campaign or just staying consistent with your brand, our multi-platform publishing ensures you reach your audience where they are—with minimal effort. Say goodbye to copying and pasting across apps and hello to a unified posting workflow."
        },
        {
          card_image: SocialMediaScheduling,
          card_title: "Smart Scheduling",
          card_description: "Schedule your posts in advance and let them go live automatically. Keep your audience engaged—even when you're offline or busy running your business.",
          longer_description: "Plan your entire week or month of content in just one session. With smart scheduling, you can choose optimal post times, see a visual calendar of upcoming posts, and avoid last-minute scrambles. Ideal for businesses, influencers, or anyone who wants to stay present online without being glued to a screen."
        },
        {
          card_image: CommentManagement,
          card_title: "Centralized Comment Management",
          card_description: "Don’t miss a single comment. View and respond to all your messages from multiple platforms in one dashboard.",
          longer_description: "Engage with your audience faster and more efficiently. Our unified inbox pulls comments and messages from Instagram, Facebook, and Twitter into one central place—so you can respond without switching apps. Filter by platform, prioritize conversations, and keep your community thriving."
        },
        {
          card_image: AIUsage,
          card_title: "Smart Replies with AI",
          card_description: "Respond faster and more effectively with AI-suggested replies tailored to your audience and tone.",
          longer_description: "Harness the power of AI to manage your social interactions more intelligently. Get context-aware reply suggestions that sound like you, save templates for common responses, and maintain your brand voice—even during high-volume comment spikes. Perfect for scaling your customer engagement while saving valuable time."
        }
    ]

    const isModalOpen = useModalState<boolean>((state) => state.isOpen);

  return (
    <div className="w-[90%] mt-15 flex justify-between items-center z-50 absolute">

        <ModalPage isOpen={isModalOpen} shouldCloseOnEsc={true} card_details={cards_content[currentCard]}/>

        {cards_content.map((single_card:CardType,index:number) => {
            const timeout = (index + 1) * 0.5;
            return (
                <Card single_card={single_card} timeout={timeout} index={index}/>
            )
        })}
    </div>
  )
}

export default Cards