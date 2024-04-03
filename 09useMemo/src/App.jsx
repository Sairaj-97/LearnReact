//so in this scenarion whenever counter1 or counter2 has any change the whole component(app.jsx) will reload 
//isEven() will also run (even on clicking counter2 the isEven will run even when there is no dependeci on counter 2) bcs the whole component reloads

// import { useState } from "react"

// function App() {
//   const[counter1,SetCounter1]=useState(0)
//   const[counter2,SetCounter2]=useState(0)  
//   const isEven=()=>{
//     console.log("func ran")
//     let i=0;
//     while(i<2000000000)i++
//     return counter1%2===0
//   }
//   return (
//     <>
//      <div>
//       <button onClick={()=>{SetCounter1(counter1+1)}}>{counter1}</button>
//       <div>{isEven()?"even":"odd"}</div>
//       <button onClick={()=>{SetCounter2(counter2+1)}}>{counter2}</button>
//      </div>
//     </>
//   )
// }

// export default App

//now we want that isEven is called only when there is a change in counter1 and dont call it when there is amy change in counter2
//we use UseMemo for that
//now when we click counter2 it will not call isEven as isEven is not dependent on counter2
//isEven is only called when counter1 is changed
import { useMemo } from "react"
import { useState } from "react"

function App() {
  const[counter1,SetCounter1]=useState(0)
  const[counter2,SetCounter2]=useState(0)  
  const isEven=useMemo(()=>{
    console.log("function ran")
    let i=0;
    while(i<2000000000)i++
    return counter1%2===0
  },[counter1])
  
  return (
    <>
     <div>
      <button onClick={()=>{SetCounter1(counter1+1)}}>{counter1}</button>
      <div>{isEven?"even":"odd"}</div>
      <button onClick={()=>{SetCounter2(counter2+1)}}>{counter2}</button>
     </div>
    </>
  )
}

export default App