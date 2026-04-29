import React from 'react'
import { RxCross2 } from "react-icons/rx";

const SendEmail = () => {
  return (
    <div className='bg-white max-w-6xl shadow-xl shadow-slate-400 rounded-t-md'>
<div>
    <h1>
        New Message
    </h1>
    <div>
<RxCross2 size={'20px'}/>
    </div>
</div>
    </div>
  )
}

export default SendEmail