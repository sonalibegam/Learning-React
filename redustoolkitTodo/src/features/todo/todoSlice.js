import {createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id : 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state , action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },            // state will give access to variable  and action will give values
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },            // we write declaration as well as defination also
    }               
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer