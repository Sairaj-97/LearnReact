import React, { useState } from 'react'
import { addTodo } from '../Slices/TodoSlice'
import { useDispatch } from 'react-redux'


function InputTodo() {
    const dispatch=useDispatch()
  const[text,setText]=useState('')
  const updateText=(e)=>{
    setText(e.target.value)
  }
  const updateTodos=()=>{
    dispatch(addTodo(text))
    setText('')
  }
  return (
    // <>
    //   <input
    //     type='text' 
    //     value={text}
    //     onChange={updateText} 
    //   >
    //   </input>
    //   <button 
    //     onClick={updateTodos}
    //   >
    //     Add
    //   </button>
    // </>
    <div className="flex items-center justify-center mt-2">
    <input
        type='text' 
        value={text}
        onChange={updateText}
        className="border border-gray-300 p-2 mr-2 rounded-md"
    />
    <button 
        onClick={updateTodos}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
        Add
    </button>
    </div>
  )
}

export default InputTodo
