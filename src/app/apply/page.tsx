import { FaFacebook, FaFacebookF } from 'react-icons/fa'

export const metadata = {
    title:"Apply"
  }

import React from 'react' 
import Link from 'next/link'


const Apply = () => {
  return (
    <div className='bg-slate-100 h-96 w-2/4  m-64 ml-72  mt-20 flex  flex-col justify-center items-center'>
      <p className='text-center text-blue-500 font-bold text-xl py-5'>Before continuing to the application</p><p className='text-center text-blue-500 font-bold text-xl'> please subscribe on these
        social</p><p className='text-center text-blue-500 font-bold text-xl'> media platforms</p>
    
   
    
      <Link href="#">< FaFacebookF className='  text-white w-7 h-7 rounded-full bg-blue-700 pt-1 pb-1 mt-5'/></Link>
      <button className=' bg-blue-400 text-center font-extrabold text-white h-14 w-48 mt-10 p-2 text-xl'>continue</button>
      <div className='flex mt-4'></div>
      <p>Already applied?</p>
      
      <a href='Get Admit Card'className='text-blue-800 underline'>Get Admit Card</a>
      
      </div>
   
      
    
    
    
  )
}

export default Apply
