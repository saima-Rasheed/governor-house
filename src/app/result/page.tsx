export const metadata = {
    title:"Result"
  }


import React from 'react'
import { text } from 'stream/consumers'

const Result = () => {
  return (
  
    

    <div>
       
  <p className='text-center text-blue-900  font-extrabold'
  >Grand Entrance Exam Result</p>
        
        <div className='flex flex-col justify-center items-center gap-y-5 bg-slate-50 h-96 w-6/12 ml-72 '>
          <label>
          <span style={{ fontWeight:'bold'}}className='text-blue-500'>Registration Number: </span>
          <input type="number"name="number" placeholder='Registration Number'/>
          </label>
        
        <div>
        <span style={{ fontWeight:'bold'}}className='text-blue-500'>CNIC or B Form Number: </span>
        <input type="number"name="number" placeholder='CNIC or B form Number' />
        <div  className='flex flex-col justify-center items-center mt-10 '>
        <button className='bg-blue-800 text-white font-bold h-10 w-28'>Get Result</button>
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Result
