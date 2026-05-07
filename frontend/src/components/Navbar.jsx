import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';

const Navbar = () => {
  const{user} = useSelector(store=>store.app);
  //const user = false;

  return (
    <div className='flex items-center justify-between px-4 h-16 border-b'>

      {/* LEFT */}
      <div className='flex items-center gap-4'>
        <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
          <RxHamburgerMenu size={22} />
        </div>

        <div className='flex items-center gap-2'>
          <img
            className='w-8'
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="logo"
          />
          <h1 className='text-xl text-gray-600 font-medium'>Gmail</h1>
        </div>
      </div>

      {user && (
        <>
          {/* SEARCH BAR */}
          <div className='flex-1 max-w-xl mx-6'>
            <div className='flex items-center bg-[#EAF1FB] px-4 py-2 rounded-full'>
              <IoIosSearch size={24} className='text-gray-700' />
              <input
                type="text"
                placeholder='Search Mail'
                className='w-full bg-transparent outline-none ml-2'
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className='flex items-center gap-2'>
            <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
              <FaRegQuestionCircle size={22} />
            </div>

            <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
              <IoSettingsOutline size={22} />
            </div>

            <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
              <TbGridDots size={22} />
            </div>

            <Avatar 
              src={user.profilePhoto}
              size="35" 
              round={true} 
            />
          </div>
        </>
      )}

    </div>
  )
}

export default Navbar