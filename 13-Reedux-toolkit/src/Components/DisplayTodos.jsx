// import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import { removeTodo } from '../Slices/TodoSlice'
// function DisplayTodos() {
    
//   const dispatch=useDispatch()
//   const todos=useSelector(state=>state.todos)


//   return (
//     <>
//       {
//         todos.map(todo=>(
//             <div>
//                 <h1> {todo.text} </h1>
//                 <button onClick={()=>{dispatch(removeTodo(todo.id))}}>Delete</button>
//             </div>
//         ))
//       }
//     </>
//   )
// }

// export default DisplayTodos

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Slices/TodoSlice';

function DisplayTodos() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <div className="space-y-4">
                {todos.map(todo => (
                    <div key={todo.id} className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                        <h1 className="text-lg">{todo.text}</h1>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayTodos;
