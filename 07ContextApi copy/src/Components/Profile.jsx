import React, { useContext, useState } from 'react'
import UserContext from '../Contexts/UserContext'

function Profile() {
  
  const {user}=useContext(UserContext)  
  return (
    <>
      {
        user?(<h1 className='flex justify-center text-3xl'>Welcome {user}!</h1>):(<h1 className='flex justify-center text-3xl'>Please Login!</h1>)
      }
    </>
  )
}

export default Profile
