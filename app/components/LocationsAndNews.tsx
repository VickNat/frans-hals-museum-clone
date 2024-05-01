"use client"
import Image from 'next/image'
import React from 'react'
import church from '@/assets/images/biel-morro.jpg'
import { GiIndianPalace } from 'react-icons/gi'

const LocationsAndNews = () => {
  return (
    <div className='flex gap-x-0 font-secondaryFont'>
      <div className='bg-primaryColor w-2/3 h-[678px]'>
        <Image src={church} alt='Church' className='w-full h-full object-cover' />
      </div>
      <div className='w-auto overflow-y-scroll scrollbar-hide h-[678px]'>
        <div className='bg-others-100 flex flex-col gap-y-20 py-20 px-20'>
          <h2 className='text-center uppercase text-8xl font-normal font-primaryFont'>Locations</h2>

          <div className='flex justify-around'>
            <div className='flex flex-col items-center justify-center'>
              <GiIndianPalace className="h-40 w-auto" />
              <h3 className='text-base font-light'>HOF</h3>
              <p className='capitalize font-extralight text-base'>Gloot heilinglad 62</p>
              <p className='capitalize font-extralight text-base'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <GiIndianPalace className="h-40 w-auto" />
              <h3 className='text-base font-light'>HOF</h3>
              <p className='capitalize font-extralight text-base'>Gloot heilinglad 62</p>
              <p className='capitalize font-extralight text-base'>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className='flex flex-col items-center gap-y-9'>
            <h3 className='text-2xl font-semibold'>One museum two locations</h3>
            <p className='text-center text-lg font-light'>
              Welcome to the Frans Hals Museum - The art museum of Haarlem - With art from the 16th and 17th centuries, modern and new art and a stimulating mix of both.
            </p>

            <p className='hover:underline transition-all ease-in-out cursor-pointer text-center text-lg font-light'>About our buildings</p>
          </div>
        </div>
        <div className='bg-others-200 py-20 px-20 flex flex-col gap-y-10'>
          <h2 className='text-center uppercase text-8xl font-normal font-primaryFont'>News</h2>
          <p className='underline hover:no-underline transition-all ease-in-out cursor-pointer text-center text-lg font-light'>Eplore museum highlights and more</p>

          <div className='flex justify-center'>
            <div className='border-r-2 flex flex-col items-center justify-center gap-y-7 border-black px-16'>
              <div className='bg-primaryColor h-52 w-52 flex justify-center items-center'>
                <Image src={church} alt='Church' className='transform hover:scale-110 cursor-pointer h-44 w-44 transition duration-300' />
              </div>
                <p className='text-center text-lg font-light'>
                  News: Some news
                </p>
                <h3 className='text-center text-2xl font-semibold'>One museum two locations</h3>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-7 border-black px-16'>
              <div className='bg-primaryColor h-52 w-52 flex justify-center items-center'>
                <Image src={church} alt='Church' className='transform hover:scale-110 cursor-pointer h-44 w-44 transition duration-300' />
              </div>
                <p className='text-center text-lg font-light'>
                  News: Some news
                </p>
                <h3 className='text-center text-2xl font-semibold'>One museum two locations</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationsAndNews