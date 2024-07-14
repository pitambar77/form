import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { LiaExclamationCircleSolid } from "react-icons/lia";
import { RxCountdownTimer } from "react-icons/rx";
import { CgNotes } from "react-icons/cg";
import { BiMessageRounded } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoReturnUpForward } from "react-icons/io5";
import { HiSaveAs } from "react-icons/hi";
import { TbMathGreater } from "react-icons/tb";

const SubHeader = () => {
  return (
    <div className=' flex justify-between p-4 items-center'>
        <div className=' flex gap-4 text-2xl items-center'>
            <div>
                <FaArrowLeftLong />
            </div>
            <div className=' font-semibold'>
               <h1>OlaMoney Technologies India Pvt Ltd</h1> 
            </div>
            <div className=' border rounded-3xl border-violet-500 '>
                <h1 className=' text-sm text-violet-500 font-semibold p-2'>Awaiting Bussiness Approval</h1>
            </div>
            <div>
                <LiaExclamationCircleSolid />
            </div>
            <div>
                <CgNotes />
            </div>
            <div>
                <RxCountdownTimer />
            </div>
            <div>
                <BiMessageRounded />
            </div>
            <div>
                <MdOutlineFileDownload />
            </div>
            <div>
                <IoReturnUpForward  />
            </div>
        </div>
        <div className=' flex gap-4 mr-6 items-center'>
            <div className=' cursor-pointer'><HiSaveAs className=' text-2xl' /></div>
            <button className=' font-semibold text-green-500'>Save Draft</button>
            <button className=' bg-cyan-700 px-4 py-1 rounded-md text-white flex justify-center'> <span>Submit</span>  <span> <TbMathGreater className=' px-1 text-2xl'/></span>  </button>
        </div>
    </div>
  )
}

export default SubHeader