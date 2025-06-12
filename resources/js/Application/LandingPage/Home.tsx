import React from 'react'
import NavBar from './components/NavBar'
import BluryBackground from './components/BluryBackground'
import MainSection from './components/MainSection'
import WhyUs from './components/WhyUs'
import SomeFeatures from './components/SomeFeatures'
import HowItWorks from './components/HowItWorks'

const Home = () => {
  return (
    <div className="h-dvh w-screen gray-color relative">
        <BluryBackground className="h-[60%] w-[70%] absolute left-[50%] top-[60%] transform -translate-x-1/2 -translate-y-1/2  blury-background blury"/>
        <NavBar/>
        <MainSection/>
        <WhyUs/>
        <SomeFeatures/>
        <HowItWorks/>
    </div>
  )
}

export default Home