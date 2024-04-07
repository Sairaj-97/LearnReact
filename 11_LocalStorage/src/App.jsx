import { useEffect, useState } from "react"
import InputName from "./Components/InputName"
import NameContext from "./Contexts/NameContext"
import Display from "./Components/Display"

function App() {
  const[names,setNames]=useState([])

  const deleteName=(id)=>{
    setNames((prev)=>prev.filter((name)=>name.id!==id))
  }

  const addName=(name)=>{
    setNames((prev)=>[{id:Date.now(),name},...prev])
  }

  useEffect(()=>{
    const gotNames = JSON.parse(localStorage.getItem("names"))
    if(gotNames && gotNames.length>0){
      setNames(gotNames)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("names",JSON.stringify(names))
  },[names])

  return (
    <>
    <NameContext.Provider value={{names,addName,deleteName}}>
      <InputName/>
      {names.map((curName)=>(
        <Display key={curName.id} displayName={curName}/>
      ))}
    </NameContext.Provider>  
    </>
  )
}

export default App
