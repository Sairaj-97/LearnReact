import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='relative w-full h-screen' 
    style={{backgroundColor:color}}>
      <div className='absolute w-full flex flex-wrap justify-center text-white bg-black bottom-0'>
        <div className='flex flex-wrap p-3'></div>
          <button onClick={()=>setColor("red")} className='border-4 rounded-xl p-2 bg-red-700 mr-4'>Red</button>
          <button onClick={()=>setColor("blue")} className='border-4 rounded-xl p-2 bg-blue-700'>Blue</button>
          <button onClick={()=>setColor("yellow")} className='border-4 rounded-xl p-2 bg-yellow-900 ml-4'>Yellow</button>
        </div>
    </div>
  )
}

export default App
