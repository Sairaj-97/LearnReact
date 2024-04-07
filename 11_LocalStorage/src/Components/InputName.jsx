import React, { useContext, useState } from 'react'
import NameContext from '../Contexts/NameContext'

function InputName() {
  const[myName,SetName]=useState("")
  const {addName}=useContext(NameContext)
  const handleAddName=()=>{
    addName(myName)
    SetName('')
  }
  return (
    <>
     <div className='flex justify-center mt-6'>
        <input
            className='bg-slate-500 rounded-lg text-black p-3'
            type='text'
            value={myName}
            onChange={(e)=>{SetName(e.target.value)}}
        />
        <button
            className='ml-4 bg-slate-500 px-3 rounded-lg'
            onClick={handleAddName}
        >
            Add
        </button>
    </div> 
    </>
  )
}

export default InputName
