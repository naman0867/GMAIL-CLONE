import React from 'react'
import { MdCropSquare } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Email = ({ id = 1234 }) => {
  const navigate = useNavigate();

  const openMail = () => {
    navigate(`/email/${id}`); // ✅ correct route
  };

  return (
    <div
      onClick={openMail}
      className='flex items-center gap-3 px-4 py-3 border-b border-gray-200 hover:shadow-sm hover:bg-gray-100 cursor-pointer'
    >

      {/* Left icons */}
      <div className='flex items-center gap-3 text-gray-400'>
        <MdCropSquare size={18} />
        <MdOutlineStarBorder size={18} />
      </div>

      {/* Sender */}
      <div className='w-40 truncate font-semibold'>
        NamanTech
      </div>

      {/* Subject + Message */}
      <div className='flex-1 text-gray-700 truncate'>
        <span className='font-medium text-black mr-2'>
          Lorem ipsum
        </span>
        - consectetur adipisicing elit...
      </div>

      {/* Time */}
      <div className='text-sm text-gray-500 whitespace-nowrap'>
        12 days ago
      </div>

    </div>
  );
};

export default Email;