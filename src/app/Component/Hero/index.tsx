import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Counter from '../Counter';

const Hero = () => {
  return (
    <div className='flex  mt-8 h-auto bg-opacity-75 bg-[url(`/bg_house.jpg`)]'>
    
      
    {/*left side*/}
    <div className=' bg-white w-1/2 '>
      {/*1st heading*/}
      
     
      <h1 className='text-blue-700 font-extrabold text-6xl ml-10 mt-10'> Governor Sindh </h1>
      {/*2nd head*/}
      
        
        <h2 className='text-blue-800 text-4xl ml-10'>Kamran Khan Tessori</h2>
      {/*3rd head ing*/}
      <div>
        <h3 className='text-blue-400 font-extrabold text-4xl mt-10 ml-10'>Certified Cloud </h3> <h3 className='text-blue-400 font-extrabold text-4xl  ml-10' >Applied Generative AI</h3>
        <h3 className='text-blue-400 font-extrabold text-4xl  ml-10'> Engineer(GenEng)</h3>
        <h3 className='text-blue-800 font-extrabold text-2xl ml-10 mt-4' >Earn up to $5,000/month</h3>
        <h3  className='text-blue-800 font-extrabold text-2xl ml-10 mt-4'>Now admission are open in</h3>
        <h3 className='text-blue-800 font-extrabold text-2xl ml-10 ' >Hyderabad</h3>
        </div>
         
          
           <div className='mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0'>
            <Link className="w-full md:w-auto" href={'/apply'}>
          <button className='w-full rounded-md bg-blue-900 py-3 text-center text-sm font-medium tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52'>APPLY NOW</button>
          </Link>
          <Counter />
          </div>  

        </div>
      
        
      
      
      <div className='flex justify-end bg-white w-6/12 '>
       <Image className=' my-5' src="/4.jpeg"
       width={600}
       height={600}
        alt="Governor sir"
        />
        </div>
        
       </div>

      
      
    
      
    
  )
}

export default Hero
