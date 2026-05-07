import React, { useEffect } from 'react'
import Email from './Email'
import useGetAllEmails from '../hooks/useGetAllEmails'
const Emails = () =>{
useGetAllEmails();

  return (
    <div>
         <Email />
      <Email />
      <Email />
      <Email />
      <Email />
      <Email />
      <Email />
      <Email />
      <Email />
      <Email />
    </div>
    
    

  )
}

export default Emails