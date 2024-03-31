import { useState } from "react"
import Dashboard from "./Components/Dashboard"
import UserContext from "./Contexts/UserContext"

function App() {
  const[userName,setUserName]=useState("Sairaj")
  return (
    <>
      <UserContext.Provider value={{userName,setUserName}}>
        <Dashboard/>
      </UserContext.Provider>
    </>
  )
}

export default App
