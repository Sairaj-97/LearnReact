import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Sairaj-97")
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[])
  return (
    <>
     <div className="flex flex-col ">
      <div className="bg-gray-200 p-4 mb-4 ">User Name:{data.login}</div>
      <div className="bg-gray-200 p-4 mb-4">Followers:{data.followers}</div>
      <div className="bg-gray-200 p-4 mb-4">Account Created on:{data.created_at}</div>
    </div> 
    </>
  )
}

export default Github
export const githubDataLoad=async()=>{
    const res=await fetch("https://api.github.com/users/Sairaj-97")
    return res.json()
}

