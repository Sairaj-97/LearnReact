import { useState,useEffect, useCallback,useRef } from 'react'


function App() {
  const [length, setLength] = useState(5)
  const [numAllowed,setNumAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [pwd,setPwd]=useState("")
  const passRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let str="abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass=""
    if(numAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!@#$%^&*"
    }
    for(let i=1;i<=length;i++){
      let randomIndex=Math.floor(Math.random()*(str.length))
      pass+=str.charAt(randomIndex)
    }
    setPwd(pass)
  },[length,numAllowed,charAllowed])
  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed])

  const copyToClipboard=()=>{
    passRef.current?.select()
    //though it will select first five but copies the whole password
    passRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(pwd)
  }

  return (
    <>
    <div className='w-full h-screen bg-black absolute'>
      <div className='flex flex-wrap justify-center mt-5 bg-slate-500 rounded-lg py-2'><p className='text-white text-2xl'> PassWord Generator</p></div>
      <div className='flex flex-wrap justify-center mt-5'>
      <input type='text' value={pwd} ref={passRef} className='rounded-3xl w-1/4 p-3' readOnly></input>
      <button onClick={copyToClipboard} className='text-white bg-blue-700 p-3 rounded-lg ml-4 hover:scale-125'>Copy</button>
      </div>
      <div className='flex overflow-hidden justify-center'>
        <div className='flex bg-slate-400 gap-x-5 p-2 w-1/2 justify-center mt-4'>
          <input 
            type='range'
            min={5}
            max={20}
            value={length}
            onChange={(e)=>setLength(e.target.value)}
          ></input>
          <label>Length:{length}</label>
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed(prev=>!prev)
            }}
          >
          </input>
          <label>Characters</label>
          <input
            type='checkbox'
            defaultChecked={numAllowed}
            onChange={()=>{
              setNumAllowed(prev=>!prev)
            }}
          >
          </input>
          <label>Numbers</label>
          
        </div>
      </div>
      
    </div>
    </>
  )
}

export default App
