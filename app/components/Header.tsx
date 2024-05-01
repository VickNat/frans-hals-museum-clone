"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import NavBar from './NavBar'
import ticket from '@/assets/images/icons8-ticket-50.png'
import flag1 from '@/assets/images/2361499_kingdom_uk_united_icon.svg'
import { BsCalendar4Event } from 'react-icons/bs'

const Header = () => {

  const [expandFlags, setExpandFlags] = useState(false)

  return (
    <section className='flex flex-col font-secondaryFont px-7 bg-primaryColor text-black w-full'>
      <div className='grid grid-cols-7'>
        <div className='col-start-1 col-span-2 mt-8'>
          {
            !expandFlags ? (
              <div onClick={() => setExpandFlags(!expandFlags)} className='border-2 border-slate-400 hover:border-slate-950 cursor-pointer rounded-full py-4 flex justify-center gap-x-3 px-6 w-28'>
                <Image src={flag1} alt='Flag' height={10} width={20} className='' />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            ) : (
              <div className='flex flex-col items-center justify-center w-44 rounded-3xl py-4 border-2 border-slate-900' onClick={() => setExpandFlags(!expandFlags)}>
                <span className='flex gap-x-3 cursor-pointer pb-1'>
                  <Image src={flag1} alt='Flag' height={10} width={20} className='' />
                  English
                </span>
                <span className='flex gap-x-3 cursor-pointer pb-1'>
                  <Image src={flag1} alt='Flag' height={10} width={20} className='' />
                  English
                </span>
                <span className='flex gap-x-3 cursor-pointer pb-1'>
                  <Image src={flag1} alt='Flag' height={10} width={20} className='' />
                  English
                </span>
                <span className='flex gap-x-3 cursor-pointer pb-1'>
                  <Image src={flag1} alt='Flag' height={10} width={20} className='' />
                  English
                </span>
              </div>
            )
          }
        </div>
        <div className='col-start-3  col-span-3'>
          <NavBar />
        </div>
        <div className='col-start-6 col-span-2 flex gap-3 font-medium text-primaryColor bg-black py-3 px-9 rounded-3xl mb-10 mt-8 ml-40'>
          <Image src={ticket} alt='Ticket' width={20} height={20} className='bg-primaryColor' />
          Buy tickets
        </div>
      </div>
      <div className='  self-center'>
        <h1 className='uppercase text-center text-8xl font-semibold'>One Museum <br /> two locations</h1>
      </div>

      <div className='fixed bg-black h-72 rounded-r-3xl w-14 left-0 top-52 z-10 flex flex-col justify-center items-center gap-y-5'>
        <BsCalendar4Event className="bg-primaryColor h-6 w-auto" />
        <BsCalendar4Event className="bg-primaryColor h-6 w-auto" />
        <BsCalendar4Event className="bg-primaryColor h-6 w-auto" />
        <BsCalendar4Event className="bg-primaryColor h-6 w-auto" />
        <BsCalendar4Event className="bg-primaryColor h-6 w-auto" />
      </div>
    </section>
  )
}

export default Header