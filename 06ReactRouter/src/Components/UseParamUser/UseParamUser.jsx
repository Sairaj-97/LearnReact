import React from 'react'
import { useParams } from 'react-router-dom'

function UseParamUser() {
    const{userid}=useParams()
    return (
    <>
     <p className='bg-red-400 m-3 p-4 text-center text-3xl'>Param Passed was:{userid}</p> 
    </>
  )
}

export default UseParamUser
