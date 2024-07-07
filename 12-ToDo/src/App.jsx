import { useState,useEffect } from 'react'
import Input from './Components/Input'
import Display from './Components/Display'
import { nanoid } from 'nanoid'
import TodoContext from './Contexts/TodoContext'


function App() {
  const [todos,setTodos]=useState([])
  const addTodo = (todo)=>(setTodos((prev)=>[...prev,{id: nanoid(), text:todo,isCompleted:false,isEditable:false}]))
  const deleteTodo = (id) =>(setTodos((prev)=>(prev.filter(todo=>todo.id!=id))))
  const checkTodo = (id) =>(setTodos((prev)=>(
    prev.map((todo)=>todo.id===id?{...todo,isCompleted:!todo.isCompleted}:todo)
  )))
  const editTodo=(id,newText)=>(setTodos((prev)=>(
    prev.map((todo)=>todo.id===id?{...todo,text:newText,isEditable:!todo.isEditable}:todo)
  )))
  const setEditable=(id)=>(setTodos((prev)=>(
    prev.map((todo)=>todo.id===id?{...todo,isEditable:!todo.isEditable}:todo)
  )))

  useEffect(()=>{
    const getTodos = JSON.parse(localStorage.getItem("todos"))
    if(getTodos && getTodos.length>0){
      setTodos(getTodos)
    } 
  },[])
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <>
    <TodoContext.Provider value={{todos,addTodo,deleteTodo,checkTodo,editTodo,setEditable}}>
      <Input/>
      {
        todos.map((todo)=>(
          <Display key={todo.id} todo={todo}/>
        ))
      }
      
    </TodoContext.Provider>
    </>
  )
}

export default App
