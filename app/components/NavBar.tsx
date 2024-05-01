"use client"

import React from 'react'
import Image from 'next/image';
import logo from '@/assets/images/frans_hals_museum_logo_before_after_a.png'

const NavBar = () => {
  return (
    <div className='flex justify-between gap-16 items-center'>
      <div>list</div>
      <div>list</div>
      <div>
        <Image src={logo} alt='Logo' height={120} width={170} />
      </div>
      <div>list</div>
      <div>list</div>
    </div>
  )
}

export default NavBar