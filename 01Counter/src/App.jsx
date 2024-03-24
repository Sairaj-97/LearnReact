import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//let counter=10;
let [counter,setCounter]=useState(0);

const addValue = () =>{
  //counter++;
  //if we simply use counter++, the value of the variable will change BUT it will not be reflected on UI
  //for that we need to use hooks like useState
  //console.log(counter,Math.random());

  //the useState(0) means the default value wil be starting from 0;
  //this returns an array , the first elemnt(counter) represents the varibale 0 and the second(setCounter) represents what change we want in that variable
  if(counter<20)
    setCounter(counter+1);
}
const removeValue=()=>{
  if(counter>0)
    setCounter(counter-1);
}
  //this is a basic counter rogram to set counter between 1 and 20

  return (
    <>
      <h1>counter Project</h1> 
      <h2>{counter}</h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>minus</button>
    </>
  )
}

export default App
