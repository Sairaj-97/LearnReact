import { useEffect, useRef, useState } from "react"

function App() {
  const[password,setPassword]=useState('')
  const[length,setLength]=useState(8)
  const[numAllow,setNumAllow]=useState(false)
  const[charAllow,setCharAllow]=useState(false)
  const passRef=useRef(null)
  const copyPass=()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }
  useEffect(()=>{
    let pass=''
    let str="abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numAllow){
      str+="0123456789"
    }
    if(charAllow){
      str+="~!@#$%^&*"
    }
    for(let i=1;i<=length;i++){
      let index=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(index)
    }
    setPassword(pass)
  },[length,numAllow,charAllow])
  return (
    <>
      <div className="flex justify-center mt-3 text-3xl">Passwod generator</div>
      <div className="flex justify-center mt-3">
        <input ref={passRef} type="text" readOnly value={password} className="bg-slate-600 text-white p-3 rounded-md"/>
        <button className="bg-blue-500 p-2 rounded-md ml-3 text-white" onClick={copyPass}>Copy</button>
      </div>
        <div className="flex justify-center mt-3">
          <div className="bg-slate-500 p-4 rounded-lg text-white">
          <input value={length} type="range" onChange={(e)=>{setLength(e.target.value)}} min={8} max={20}/>
          <label>Length:{length}</label>
          <input type="checkbox" 
            checked={numAllow} 
            onChange={()=>{
              setNumAllow(prev=>!prev)
            }} 
            className="ml-3"/>
          <label>Numbers</label>
          <input 
            type="checkbox" 
            onChange={()=>{
              setCharAllow(prev=>!prev)
            }} 
            checked={charAllow} 
            className="ml-3"/>
          <label>Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
