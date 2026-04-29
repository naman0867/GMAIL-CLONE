import React from 'react'
import { MdCrop54 } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
//import { MdKeyboard } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const Inbox = () => {
  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
        <div className='flex items-center justify-between px-4'>
  <div className='flex items-center gap-4'>
<div className='flex items-center gap-1'>
<MdCrop54 size={'20px'}/>
<FaCaretDown size={'20px'}/>
        </div>
<div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
<IoMdRefresh size={'20px'}/>
</div>
<div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
<IoMdMore size={'20px'}/>
</div>
        </div>
        </div>
      
        <div>
            <span>1 to 50</span>
            <MdKeyboardArrowLeft />
            <MdKeyboardArrowRight />
        </div>
    </div>
  )
}

export default Inbox