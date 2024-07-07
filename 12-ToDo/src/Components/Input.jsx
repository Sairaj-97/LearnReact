import React, { useContext, useState } from 'react'
import TodoContext from '../Contexts/TodoContext';

function Input() {
  const { addTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState('');

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  }

  const handleAddTodo = () => {
    addTodo(todo);
    setTodo('');
  }

  return (
    <div className='flex justify-center mt-9'>
      <input
        className='border border-black p-3 w-1/2'
        type='text'
        value={todo}
        onChange={handleOnChange} // Add onChange handler to update 'todo' state
        placeholder='enter your task'
      />
      <button
        className='bg-slate-700 text-white p-2 mx-2 rounded-md px-6 hover:bg-black'
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}

export default Input;
