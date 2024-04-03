import { useRef } from "react"

function App() {
  const inputRef=useRef('')
  const changeBg=()=>{
    inputRef.current.value="hello world"
  }
  return (  
    <>
      <div>
        <input 
          ref={inputRef}
          placeholder="hello"
          type="text"/>
        <button onClick={changeBg}>
          Change BG
        </button>
      </div>
    </>
  )
}

export default App
