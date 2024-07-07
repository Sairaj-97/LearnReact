import React, { useContext, useState } from 'react'
import TodoContext from '../Contexts/TodoContext'

function Display({todo}) {
  const{deleteTodo,checkTodo,editTodo,setEditable}=useContext(TodoContext)
  const [editedText,setEditedText]=useState(todo.text)
  const handleDelete=()=>{
    deleteTodo(todo.id)
  }
  const checkHandler=()=>{
    checkTodo(todo.id)
  }
  const handleSave=()=>{
    editTodo(todo.id,editedText)
  }
  const handleEdit=()=>{
    setEditable(todo.id)
  }
  const handleChange=(e)=>{
    setEditedText(e.target.value)
  }
  return (
    <>
      <div className='bg-slate-500 w-1/2 flex mx-auto p-2 rounded-md mt-3 justify-between items-center' >
        
        <input type='checkbox' onChange={checkHandler} checked={todo.isCompleted}/>
        <input 
          type='text' 
          disabled={!todo.isEditable}
          value={editedText} 
          onChange={handleChange}
          className={todo.isCompleted?'line-through ml-2 bg-slate-500 text-white':'ml-2 bg-slate-500 text-white'}
        >    
          
          
        </input>
        {
          todo.isEditable?(
            <button className='bg-slate-700 text-white p-2 mx-2 rounded-md px-6 hover:bg-black ml-auto'onClick={handleSave}>Save</button>
          ):(
            <button className='bg-slate-700 text-white p-2 mx-2 rounded-md px-6 hover:bg-black ml-auto'onClick={handleEdit}>Edit</button>
          )
        }
        
        
        
        <button className='bg-slate-700 text-white p-2 mx-2 rounded-md px-6 hover:bg-black ' onClick={handleDelete}>
          Delete
        </button>
      </div>

    </>
  )
}

export default Display
