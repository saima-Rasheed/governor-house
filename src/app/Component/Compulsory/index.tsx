import React from 'react'
import Link from  'next/link';
import Image from 'next/image';
import programmingFundamentals from '../../../../public/programming_fundamentals.jpg';
import nextjsCourse from '../../../../public/nextjs.jpg';
import EarnAsYouLearn from '../../../../public/earn_as_you_learn.jpg';

const Compulsory= () => {
  return (
    <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10'>
        <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'> Core Courses Sequences</h1>
        <div className='grid xl:lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>
            <Link href={'/compulsory/1'} className="hover:scale-105 duration-200 transition-all">
            <div className='overflow-hidden h-fit box-shadow rounded-lg flex flex-col justify-center items-center'>
                <div>
                    <Image alt='programming fundamentals' src={programmingFundamentals} className='object-cover w-full' height={'300'}/>
                </div>
                <div className='px-4 flex justify-center items-center h-[70px]'>
                    <text>
                        Programming Fumdmentals
                    </text>

                </div>

            </div>
            </Link>
            <Link href={'/copmulsory/2'} className='hover:scale-105 duration-200 transition-all'>
           
            <div className='overflow-hiddenh-fit box-shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
                <div>
                     <Image alt='nextjs' src={nextjsCourse} className='object-cover w-full' height={'300'}/>
                </div>
                <div className='px-4  flex justify-center items-center h-{70px}'>
                    <text>
                        Web2 Using Nextjs
                    </text>
                    </div>

                </div>
            </Link>
            
            <Link href={'/compulsory/3'} className='hover:scale-105 duration-200 transition-all'>
            <div  className='overflow-hiddenh-fit box-shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <Image alt='nextjs' src={EarnAsYouLearn} className='object-cover w-full' height={'300'}/>
            </div>
            <div className='px-4  flex justify-center items-center h-{70px}'>
                <text>
                    Earn as You Learn
                </text>

        </div>
    
    </Link>
    
    </div>
  
    </div>
  )
}

export default Compulsory
