import { useState } from "react"
import UserContext from "./Contexts/UserContext"
import Profile from "./Components/Profile"
import Login from "./Components/Login"

function App() {
  const[user,setUser]=useState(null)
  return (
    <>
      <UserContext.Provider value={{user,setUser}}>
        <Login/>
        <Profile/>
      </UserContext.Provider>
    </>
  )
}

export default App
