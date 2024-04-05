import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data=useLoaderData()
  return (
    <div className='flex justify-center text-3xl bg-black text-white'>
      <h1 className='mt-8 mb-8'>URL:{data.url}</h1>
    </div>
  )
}

export default Github

export const loadGithub=async()=>{
  const res=await fetch("https://api.github.com/users/Sairaj-97")
  return res.json()
}

