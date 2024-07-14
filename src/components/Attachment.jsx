import React from 'react'
import { MdOutlineAttachFile } from "react-icons/md";

const Attachment = () => {
  return (
    <div className=' w-60 h-screen border mt-4 rounded-md'>
        <div className=' flex justify-between border-b p-3 font-semibold cursor-pointer text-cyan-800 '>
            <div>Attachment</div>
            <div className=' text-xl rotate-45'><MdOutlineAttachFile /></div>
        </div>
        
        <div className=' flex flex-col p-4  '>
            <div className=''>
                <label htmlFor="mt-6" className=' font-medium mb-3 flex'>GST Certificate</label>
                <input type="file"  className="hidden " id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer  w-48 border rounded-md bg-transparent p-2 border-blue-300 text-cyan-700 bg-sky-50">
                    Browse or drop file
                </label>
            </div>
                <div className=' mt-10'>
                    <label htmlFor="" className=' font-medium mb-3 flex'>PAN Number</label>
                    <input type="file"  className="hidden " id="file-upload" />
                    <label htmlFor="file-upload" className="cursor-pointer  w-48 border  rounded-md bg-transparent p-2 border-blue-300 text-cyan-700 bg-sky-50">
                        Browse or drop file
                    </label>
                </div>
                <div className=' mt-10'>
                    <label htmlFor="" className=' font-medium mb-3 flex'>MSME Certificate</label>
                    <input type="file"  className="hidden " id="file-upload" />
                    <label htmlFor="file-upload" className="cursor-pointer  w-48 border rounded-md bg-transparent p-2 border-blue-300 text-cyan-700 bg-sky-50">
                        Browse or drop file
                    </label>
                </div>
            </div>
        <div className=' border-b-2 p-4'></div>
        <div className=' flex flex-col p-4'>
            <div className=' mt-6'>
                    <label htmlFor="" className=' font-medium mb-3 flex'>Vender Contract</label>
                    <input type="file"  className="hidden " id="file-upload" />
                    <label htmlFor="file-upload" className="cursor-pointer  w-48 border rounded-md bg-transparent p-2 border-blue-300 text-cyan-700 bg-sky-50">
                        Browse or drop file
                    </label>
                </div>
                <div className=' mt-10'>
                    <label htmlFor="" className=' font-medium mb-3 flex'>Vender Final Proposal</label>
                    <input type="file"  className="hidden " id="file-upload" />
                    <label htmlFor="file-upload" className="cursor-pointer  w-48 border rounded-md bg-transparent p-2 border-blue-300 text-cyan-700 bg-sky-50">
                        Browse or drop file
                    </label>
                </div>
            </div>
    </div>
  )
}

export default Attachment