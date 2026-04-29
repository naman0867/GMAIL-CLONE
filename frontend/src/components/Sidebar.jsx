import React from 'react';
import { LuPencil } from "react-icons/lu";
import { MdInbox } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineSnooze } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { MdOutlineContactPage } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

const sidebarItems = [
  {
    icon: <MdInbox size="20px" />,
    text: "Inbox"
  },
  {
    icon: <FaRegStar size="20px" />,
    text: "Starred"
  },
  {
    icon: <MdOutlineSnooze size="20px" />,
    text: "Snoozed"
  },
  {
    icon: <IoMdSend size="20px" />,
    text: "Sent"
  },
  {
    icon: <MdOutlineContactPage size="20px" />,
    text: "Drafts"
  },
  {
    icon: <MdExpandMore size="20px" />,
    text: "More"
  }
];

const Sidebar = () => {
  return (
    <div className="w-[15%]">
      
      {/* Compose Button */}
      <div className="p-3">
        <button className="flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-xl hover:shadow-md">
          <LuPencil size="24px" />
          Compose
        </button>
      </div>

      {/* Sidebar Items */}
      <div className="text-gray-600">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center pl-6 py-2 rounded-r-full gap-3 my-1 hover:cursor-pointer hover:bg-gray-200"
          >
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Sidebar;