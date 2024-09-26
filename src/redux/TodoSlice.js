import { createSlice, nanoid } from '@reduxjs/toolkit'
import { list } from 'postcss'

export const TodoSlice = createSlice({
    name: 'Todo_List',
    initialState: {
        todoList: [],
        searcArr: [],
        trueFlase: false
    },
    reducers: {
        addTodo: (state, action) => {
            const listObj = {
                id: nanoid(),
                list: action.payload
            }
            state.todoList.push(listObj)
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter((el) => {
                return el.id !== action.payload
            })
        }
        ,
        updateTodo: (state, action) => {
            state.searcArr = [action.payload]
        },

        editTodo: (state, action) => {
            const { ix, eiteName } = action.payload
            
            state.todoList.forEach(el => {
                if (el.id == ix) {
                    el.list = eiteName
                }
            })
        }
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, updateTodo, editTodo } = TodoSlice.actions

export default TodoSlice.reducer