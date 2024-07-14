import React from 'react'
import logo from '../assests/logo.jpg'
import { PiCompassLight } from "react-icons/pi";
import { CiFileOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { TbApiApp } from "react-icons/tb";

const Sidebar = () => {

    const Menus = [
        {
            
            icon:<PiCompassLight />
        },
        
        {
           
            icon:<CiFileOn />
        },
        {
           
            icon:<TbApiApp />
        },
        {
          
            icon:<IoSettingsOutline />
        },

    ]

  return (
    <div className= 'h-screen w-16 text-cyan-800  ' >
        <img src={logo} alt="log" className=' w-10 mt-4 flex justify-center mx-2' />
         <ul className=' '>
            {Menus.map((data) =>(
                <li className=' mt-8 text-3xl flex justify-center cursor-pointer hover:bg-cyan-900 hover:text-white border rounded-tl-2xl rounded-bl-2xl px-1 p-1'>{data.icon}</li>
            ))}
         </ul>
    </div>
  )
}

export default Sidebar