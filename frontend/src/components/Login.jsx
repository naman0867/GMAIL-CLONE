import React from 'react'
import { Link } from "react-router-dom";
const Login= () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen mt-10'>
      <form className='flex flex-col gap-3 bg-white p-4 rounded-md shadow-md'>
        <h1 className='font-bold text-2xl uppercase my-2'>Signup </h1>
        

        <input 
          type='email' 
          placeholder='Email' 
          className='border border-gray-400 rounded-md px-2 py-1'
        />

        <input 
          type='password' 
          placeholder='Password' 
          className='border border-gray-400 rounded-md px-2 py-1'
        />
        <button type="submit"  className='bg-gray-800 p-2 text-white my-2 rounded-md' >
            Signup
        </button>
<p>Dont't have an account?<Link to ={"/signup"} className='text-blue-600'>Signup</Link></p>
      </form>
    </div>
  )
}

export default Login