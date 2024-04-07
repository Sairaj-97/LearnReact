import React from 'react'

function Display({displayName}) {
  return (
    <>
      <div className='bg-black text-white flex justify-center mt-3'>
        <h1>{displayName}</h1>
      </div>
    </>
  )
}

export default Display
