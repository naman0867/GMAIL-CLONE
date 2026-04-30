import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/appSlice'; // ✅ import

const SendEmail = () => {
  const { open } = useSelector(store => store.app);
  const dispatch = useDispatch();

  return (
    <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-400 rounded-t-md`}>
      
      <div className='flex items-center justify-between px-3 py-2'>
        <h1>New Message</h1>
        <div 
          onClick={() => dispatch(setOpen(false))} // ✅ FIX
          className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'
        >
          <RxCross2 size={'20px'} />
        </div>
      </div>

      <form className='flex flex-col p-3 gap-2'>
        <input type="text" placeholder='To' className='outline-none py-1' />
        <input type="text" placeholder='Subject' className='outline-none py-1' />
        <textarea rows={10} cols={30} className='outline-none py-1'></textarea>
      </form>

    </div>
  )
}

export default SendEmail;