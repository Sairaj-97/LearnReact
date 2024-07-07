import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"hello wolrd"}]
}
export const TodoSlice=createSlice({
    initialState,
    name:"todos",
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const{addTodo,removeTodo}=TodoSlice.actions

const todoReducer=TodoSlice.reducer

export default todoReducer