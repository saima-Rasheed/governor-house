"use client";


import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-900 text-white h-12 py-2 px-3 flex justify-between items-center'>
        <div className='mb-8 sm:mb-0'>
           <img 
           src='/logog.png'
           alt='logo'
           className='w-15 h-28 pt-8'
           />
        </div>
        <div><h1 className='font-semibold text-blue-200 xs:text-xl sm:text-xl md:text-xl lg:2xl'>Tution Free Education Program on Latest Technologies</h1></div>
        <div>
          <ul className='flex space-x-5'>
        <li><Link href="/" className='hover:text-red-600'>Home</Link></li>
        <li><Link href="/apply"  className='hover:text-red-600'>Apply</Link></li>
        <li><Link href="/jobs" className='hover:text-red-600'>Jobs</Link></li>
        <li><Link href="/result" className='hover:text-red-600'>Result</Link></li>
        <li><Link href="/courses" className='hover:text-red-600'>Courses</Link></li>
        </ul>
        </div>  
      </nav>
    </div>
      
    
    
    
  )
}

export default Navbar
