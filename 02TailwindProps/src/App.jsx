import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='bg-blue-400 text-2xl p-5 rounded-xl text-black font-bold '>Hello Tailwind</p>
      <Card userName="Sairaj" btnText="click me"/>
      <Card userName="Naman" btnText="visit me" />
    </>
  )
}

export default App
