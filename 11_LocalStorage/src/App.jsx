import { useEffect, useState } from "react"
import InputName from "./Components/InputName"
import NameContext from "./Contexts/NameContext"
import Display from "./Components/Display"

function App() {
  const[names,setNames]=useState([])
  const addName=(name)=>{
    setNames((prev)=>[...prev,name])
  }

  useEffect(()=>{
    localStorage.setItem("names",JSON.stringify(names))
  },[names])
  useEffect(()=>{
    const gotNames = JSON.parse(localStorage.getItem("names"))
    if(gotNames && gotNames.length>0){
      setNames(gotNames)
    }
  },[])
  return (
    <>
    <NameContext.Provider value={{names,addName}}>
      <InputName/>
      {names.map((curName,index)=>(
        <Display key={index} displayName={curName}/>
      ))}
    </NameContext.Provider>  
    </>
  )
}

export default App
