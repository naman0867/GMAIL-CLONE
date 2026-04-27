import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-3 h-16'>
      <div className='flex items-center gap-10'>
        <div className='flex items-center gap-2'>
          <RxHamburgerMenu size={24} />
        </div>
      </div>
    </div>
  )
}

export default Navbar