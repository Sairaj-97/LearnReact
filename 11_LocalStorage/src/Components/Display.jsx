import React, { useContext } from 'react'
import NameContext from '../Contexts/NameContext'

function Display({displayName}) {
  const{deleteName}=useContext(NameContext)
  return (
    <>
      <div className=' flex justify-center mt-3'>
        <h1 className='bg-blue-600 text-white w-48 text-left p-2'>{displayName.name}</h1>
        <button className='bg-black text-white ml-4 p-2 rounded-md hover:bg-red-700'
        onClick={()=>deleteName(displayName.id)}
        >

          Delete
        </button>
      </div>
    </>
  )
}

export default Display
