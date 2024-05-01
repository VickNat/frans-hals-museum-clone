import React from 'react'
import art1 from '@/assets/images/birmingham-museums.jpg'
import { ImageScroll } from '@/lib/types'
import Image from 'next/image'
import { GiTicket } from 'react-icons/gi'
import { AiOutlineCalendar } from 'react-icons/ai'

const WhatsOn = () => {

  const images: ImageScroll[] = [
    {
      id: "1",
      url: art1
    },
    {
      id: "2",
      url: art1
    },
    {
      id: "3",
      url: art1
    },
    {
      id: "4",
      url: art1
    },
    {
      id: "5",
      url: art1
    },
    {
      id: "6",
      url: art1
    },
    {
      id: "7",
      url: art1
    },
    {
      id: "8",
      url: art1
    },
    {
      id: "9",
      url: art1
    },
    {
      id: "10",
      url: art1
    }
  ]

  return (
    <div className=' bg-secondaryColor py-20 flex flex-col gap-y-10 items-center mx-auto'>
      <h1 className='uppercase font-semibold text-4xl font-primaryFont'>what's on</h1>
      <div className='w-full overflow-x-hidden flex flex-col items-center justify-center gap-y-16'>
        <ul className='flex gap-x-16 left-0 animate-marquee-infinite hover:marqueeStop  cursor-grab'>
          {
            images.map(image => (

              <li key={image.id} className=''>
                <div className='relative w-96 bg-primaryColor'>
                  <Image className='w-96 h-96 object-cover transform hover:scale-95 transition duration-300 ease-in-out' src={image.url} alt='Image' />
                  <div className='absolute right-0 bottom-0 p-2 bg-black w-12 h-12 rounded-full -mb-6 -mr-6 cursor-pointer'>
                    <GiTicket className="h-8 w-auto text-primaryColor" />
                  </div>
                </div>
                <div className='mt-6 flex flex-col gap-y-4'>
                  <h3 className='text-center uppercase font-light text-md'>Activity at hof</h3>
                  <h3 className='text-center font-semibold text-3xl'>The Hals Phenomenon</h3>
                  <p className='text-center tracking-wider capitalize font-light text-md'>get creative at the frans hals museum</p>
                </div>
              </li>
            ))
          }
        </ul>
        <div className='bg-black py-3 px-9 rounded-full flex justify-center items-center gap-x-2.5'>
          <AiOutlineCalendar className="h-8 w-auto text-primaryColor" />
          <span className='capitalize font-bold text-primaryColor text-lg'>view all events</span>
        </div>
      </div>
    </div>
  )
}

export default WhatsOn