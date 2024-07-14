import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import profile from '../assests/profile.png'
const Header = () => {
  return (
    <>
    <div className=' flex justify-between w-full p-4 border-b '>
        <div>
            <h1 className=' text-2xl font-semibold'>Mange Vender</h1>
        </div>
        <div className=' flex gap-4'>
            <div className=' border-2 rounded-full p-3'>
            <IoNotificationsOutline className=' text-2xl' />

            </div>
            <div className=' border rounded-full bg-yellow-100'>
                <img src={profile} alt="profile" className=' h-12 w-12 ' />
            </div>
            <div>
                <h1 className=' font-semibold'>Rohit Sharma</h1>
                <p>rohit.sharma@growqust.in</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header