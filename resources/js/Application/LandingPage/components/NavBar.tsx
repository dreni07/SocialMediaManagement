import React from 'react'
import Logo from '../../logo.png';

const NavBar = () => {
  return (
    <div className="w-full h-[80px] flex justify-center items-center">
        <div className="w-[80%] h-[80%] flex items-center justify-between shadow-sm rounded-full">
            <div className="ml-2 flex items-center gap-2">
                <img src={Logo} height="50" width="50"/>
                <h1 className="font-outfit font-bold text-black text-xl">Plan AI</h1>
            </div>

            <ul className="flex items-center gap-5">
                <li className="font-outfit text-[#333] opacity-75 cursor-pointer">Features</li>
                <li className="font-outfit text-[#333] opacity-75 cursor-pointer">Use Cases</li>
                <li className="font-outfit text-[#333] opacity-75 cursor-pointer">Pricing</li>
                <li className="font-outfit text-[#333] opacity-75 cursor-pointer">Contact</li>
            </ul>

            <button className="mr-2 dark-purple text-white font-outfit px-5 py-1 rounded-full cursor-pointer shadow-sm">Get Started</button>
        </div>
    </div>
    
  )
}

export default NavBar