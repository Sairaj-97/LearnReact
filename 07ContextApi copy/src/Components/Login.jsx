import React, { useContext, useState } from 'react'
import UserContext from '../Contexts/UserContext'

function Login() {
    const{setUser}=useContext(UserContext)
    const[userName,setUserName]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser(userName)
    }
  return (
    <>
      {/* <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e)=>{
          setUserName(e.target.value)
        }}
      />
      <button
        onClick={handleSubmit}
      >
        Submit
      </button> */}
    <div className='flex justify-center items-center mt-4'>
    <input
    type="text"
    placeholder="username"
    value={userName}
    onChange={(e)=>{
        setUserName(e.target.value)
    }}
    className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
    </div >
    <div className='flex justify-center'>
    <button
        onClick={handleSubmit}
        className=" mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
        Submit
    </button>
    </div>
    </>
  )
}

export default Login
