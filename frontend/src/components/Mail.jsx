import React from 'react'
import { useNavigate } from 'react-router-dom'

import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import { BiArchiveIn } from "react-icons/bi";
import { MdOutlineDeleteOutline, MdOutlineMarkEmailRead, MdOutlineWatchLater, MdOutlineAddTask, MdDriveFileMoveOutline, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Mail = () => {
  const navigate = useNavigate();

  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>

      {/* Top bar */}
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-gray-700 py-2'>

          <div onClick={() => navigate("/")} className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <IoMdArrowBack size={20} />
          </div>

          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <BiArchiveIn size={20} />
          </div>

          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineDeleteOutline size={20} />
          </div>

          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineMarkEmailRead size={20} />
          </div>

          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineWatchLater size={20} />
          </div>

          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdOutlineAddTask size={20} />
          </div>

          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <MdDriveFileMoveOutline size={20} />
          </div>

          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <IoMdMore size={20} />
          </div>

        </div>

        <div>
          <button className='flex items-center gap-2'>
            <span>1 to 50</span>
            <MdKeyboardArrowLeft size={24} />
            <MdKeyboardArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className='h-[90vh] overflow-y-auto p-4'>
        
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <h1 className='text-xl font-medium'>Subject</h1>
            <span className='text-sm bg-gray-200 rounded-md px-2'>inbox</span>
          </div>

          <div className='text-gray-400 text-sm'>
            <p>12 days ago</p>
          </div>
        </div>

        <div className='text-gray-500 text-sm mt-4'>
          <h1>naman0664.be23@chitkara.edu.in</h1>
          <span>to me</span>
        </div>

        <div className='my-10'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Unde aliquam nam quisquam eaque similique aliquid expedita
            neque totam ipsam laborum.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Mail