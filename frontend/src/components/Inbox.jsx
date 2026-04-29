import React, { useState } from 'react';
import Email from './Email'; // ✅ import this

import { MdCrop54 } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdRefresh, IoMdMore } from "react-icons/io";
import { GoTag } from "react-icons/go";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaInbox } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";

const mailType = [
  { icon: <FaInbox size="20px" />, text: "Primary" },
  { icon: <GoTag size="20px" />, text: "Promotions" },
  { icon: <FaUserFriends size="20px" />, text: "Social" },
];

const Inbox = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
      
      {/* Top bar */}
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1'>
            <MdCrop54 size="20px" />
            <FaCaretDown size="20px" />
          </div>

          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <IoMdRefresh size="20px" />
          </div>

          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <IoMdMore size="20px" />
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <span>1 to 50</span>
          <MdKeyboardArrowLeft size="24px" />
          <MdKeyboardArrowRight size="24px" />
        </div>
      </div>

      {/* Tabs + Email list */}
      <div className='h-[90vh] overflow-y-auto'>
        
        {/* Tabs */}
        <div className='flex items-center gap-1'>
          {mailType.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`${
                selected === index
                  ? "border-b-4 border-b-blue-600 text-blue-600"
                  : "border-b-4 border-b-transparent"
              } flex items-center gap-5 p-4 w-52 hover:bg-gray-200`}
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>

        {/* ✅ Emails list (THIS WAS MISSING) */}
        <div>
          <Email />
          <Email />
          <Email />
          <Email />
          <Email />
        </div>

      </div>
    </div>
  );
};

export default Inbox;