import React from 'react'

const Form = () => {
  
  return (
    <>
    <div className=' h-screen max-w-full border m-4 rounded-md '>
        <div className=' w-full border-b flex items-center gap-8 p-3 font-semibold cursor-pointer'>
            <div className=' px-4'>
                <button className=' text-cyan-600' >Vender request details</button>
            </div>
            <div>
            <h1 className=' text-cyan-800'>Vender form details</h1>
            </div>
            <div>
            <h1 className=' text-gray-300'>Add finace details</h1> 
            </div>
        </div>
        <div>
            <form action="">
              <div className=' flex justify-between p-4'>
              <div className=' mb-3'>
                <label htmlFor="" className=' font-medium mb-2 flex'>Select State*</label>
                <select className=' w-48 border rounded-md bg-transparent border-blue-200 p-2'>
                    <option >Karnataka</option>
                    <option >Chhatisgarouch</option>
                    <option >Tamilnadu </option>
                    <option > Bishar</option>
                    <option > Odisha </option>

                  </select>
              </div>
              <div className=' mb-3'>
                <label htmlFor="" className=' font-medium mb-2 flex'>Location</label>
                <input type="text" placeholder='Enter your location' className=' w-full border rounded-md bg-transparent border-blue-200 p-2' />
              </div>
              <div className=' mb-3'>
                <label htmlFor="" className=' font-medium mb-2 flex'>Location GSTIn</label>
                <input type="text" placeholder='' className=' w-full border rounded-md bg-transparent border-blue-200 p-2' />
              </div>
              <div className=' mb-3'>
                <label htmlFor="" className=' font-medium mb-3 flex'>Location GSTIn Certificate*</label>
                {/* <input type="file" hidden placeholder='Browse or drop file' required={true} className=' w-full border rounded-md bg-transparent border-gray-400 p-2' /> */}
                <input type="file"  className="hidden " id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer  w-48 border rounded-md bg-transparent p-2 border-blue-300 text-cyan-700 bg-sky-50">
                Browse or drop file
            </label>
              </div>
              </div>
             
             
              <div className=' flex justify-between p-4 mt-10'>
              <div className=' mb-3'>
                <label htmlFor="" className=' font-medium mb-2 flex'>POC Name*</label>
                <input type="text" placeholder='' required={true} className=' w-full border rounded-md bg-transparent border-blue-200 p-2' />
              </div>
              <div className=' mb-3'>
                <label htmlFor="" className=' font-medium mb-2 flex'>POC Designation*</label>
                <input type="text" placeholder='Designation' required={true} className=' w-full border rounded-md bg-transparent border-blue-200 p-2' />
              </div>
              <div className=' mb-3'>
                <label htmlFor="" className=' font-medium mb-2 flex'>POC Email Id*</label>
                <input type="email" placeholder='poc@gmail.com' required={true} className=' w-full border rounded-md bg-transparent border-blue-200 p-2' />
              </div>
              <div className=' mb-3'>
                <label htmlFor="" className=' font-medium mb-2 flex'>POC Mobile Number*</label>
                <input type="number" placeholder='9988776655' required={true} className=' w-full border rounded-md bg-transparent border-blue-200 p-2' />
              </div>
              </div>
              <div>
                <div className=' mb-12 p-4'>
                  <label htmlFor="" className=' font-medium mb-2 flex'>Address*</label>
                  <input type="text" placeholder='Enter your address' required={true} className=' w-3/4 border rounded-md bg-transparent border-blue-200 p-2' />
                </div>
              </div>
            <hr />
            <div>
              <div className=' p-4'>
                <h1 className=' text-xl font-semibold'>Account Details</h1>
              </div>
              <div>
                <div className=' flex justify-between p-4 mt-10'>
                <div className=' mb-3'>
                  <label htmlFor="" className=' font-medium mb-2 flex'>Select Bank*</label>
                  <select required={true} className=' w-48 border rounded-md bg-transparent border-blue-200 p-2'>
                    <option >SBI</option>
                    <option >Karnataka Bank</option>
                    <option >HDFC </option>
                    <option > Union </option>
                    <option > Axis </option>

                  </select>
                </div>
                <div className=' mb-3'>
                  <label htmlFor="" className=' font-medium mb-2 flex'>Account Name</label>
                  <input type="text" placeholder='Designation' className=' w-full border rounded-md bg-transparent border-blue-200 p-2' />
                </div>
                  <div className=' mb-3'>
                    <label htmlFor="" className=' font-medium mb-2 flex'>Account Number</label>
                    <input type="number" placeholder='' className=' w-full border rounded-md bg-transparent border-blue-200 p-2' />
                  </div>
                  <div className=' mb-3'>
                    <label htmlFor="" className=' font-medium mb-2 flex'> Confirm Account Number</label>
                    <input type="number" placeholder='9988776655' className=' w-full border rounded-md bg-transparent border-blue-200 p-2' />
                  </div>
                </div>

                <div className=' flex justify-between w-1/2 p-4'>
                  <div className=' mb-3'>
                    <label htmlFor="" className=' font-medium mb-2 flex'>IFSC Code</label>
                    <input type="String" placeholder='' className=' w-full border rounded-md bg-transparent border-blue-200 p-2' />
                  </div>
                  <div className=' mb-3'>
                    <label htmlFor="" className=' font-medium mb-2 flex'> Cancelled Check</label>
                    <input type="drop" placeholder='' className=' w-full border rounded-md bg-transparent border-blue-200 p-2' />
                  </div>  
                </div>
              </div>
            </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Form