import React from 'react'
import { FaFacebook,FaYoutube,FaTwitter,FaInstagram,FaTiktok, FaFacebookF } from 'react-icons/fa'
import Link from 'next/link'
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div>
        <footer className='bg-gray-100 py-8 px-10 text-gray-800 flex justify-around'>
            <div className='container mx-auto grid-cols-1 md:grid-cols-3 gap-8'>
            
        <h3 className="text-xl font-bold mb-4">Core Courses</h3>
        <ul className="space-y-2 text-lg">
        <li>Programming Fundamentals</li>
       <li>Web2 using Nextjs</li>
       <li>Earn as You Learn</li>
        </ul>
        </div>

        <div className='container mx-auto  grid-cols-1 md:grid-cols-3 gap-8'>
        <h3 className="text-xl font-bold mb-4">Advanced Courses</h3>
        <ul className="space-y-2 text-lg">
        <li>Web 3 and Metaverse </li>
       <li>Cloud-Native Computing</li>
       <li>Artificial Intelligence (AI) and Deep Learning</li>
       <li>Ambient Computing and IoT</li>
       <li>Genomics and Bioinformatics</li>
       <li>Network Programmability and Automation</li>
        </ul>

        </div>
        <div>
        <h3 className="text-xl font-bold mb-4">Social Links</h3>
        <div className="flex space-x-4 mb-4">
        <Link href="#">< FaFacebookF className='  text-white w-6 h-6 rounded-full bg-blue-700 pt-1 pb-1'/></Link>
        <Link href="#">< FaYoutube className='w-6 h-6 rounded-full text-white bg-red-600  pt-1 pb-1'/></Link>
        <Link href="#"><FaTwitter className='w-6 h-6 rounded-full text-white bg-blue-500  pt-1 pb-1'/></Link>
        <Link href="#"><FaInstagram className='w-6 h-6 rounded-full text-white bg-pink-500  pt-1 pb-1'/></Link>
        <Link href="#"><FaTiktok className='w-6 h-6 rounded-full text-white bg-black pt-1 pb-1'/></Link>
       
        </div>
        <a href='mailto:education@governorsindh.com' className='text-blue-800 underline flex items-center gap-3'>
         <MdEmail />
          education@governorsindh.com</a>
         </div>
        </footer>
      
    </div>
  )
}

export default Footer
