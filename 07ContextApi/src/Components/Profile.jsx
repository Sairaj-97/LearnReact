import React, { useContext } from 'react'
import UserContext from '../Contexts/UserContext'

function Profile() {
  const {userName}=useContext(UserContext)  
  return (
    <>
        <h1 className='flex justify-center text-3xl'>Welcome {userName}!</h1>
    </>
  )
}

export default Profile
