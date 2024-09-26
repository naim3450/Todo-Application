import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, removeTodo } from "../redux/TodoSlice";
import EditButton from './EditButton';

const Todolist = () => {

    const listArr = useSelector((state) => state.TodoArr.todoList)
    const searcArr = useSelector((state) => state.TodoArr.searcArr)

    const dispatch = useDispatch()


    const [eiteName, seteiteName] = useState(``)
    let [show, setshow] = useState(false)
    let [idState, setidState] = useState('')



    const editBtn = (id, list) => {
        setshow(show = true)
        setidState(id)
        seteiteName(list)
    }

    const doneBtn = () => {
        function inFn(ix, eiteName) {
            return {
                ix,
                eiteName
            }
        }

        dispatch(editTodo(inFn(idState, eiteName)))
        setshow(show = false)
    }

    return (
        <div>

            {
                show ? <form className=" mt-6 flex items-center space-x-2 text-gray-700 font-semibold">
                    <input
                        type="text"
                        placeholder="Edit a new todo..."
                        value={eiteName}
                        onChange={(e) => seteiteName(e.target.value)}
                        className="bg-red px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                    />
                    <EditButton onClick={doneBtn} text={`Done`} />
                </form> : false
            }
            {
                listArr == false ?
                    <div className="pt-[0.8vw]">
                        <div className="flex items-center bg-gray-100 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                            <input type="checkbox" className="mr-4 h-6 w-6 text-green-600 focus:ring-green-500 border-gray-400 rounded-full" />

                            <span className="flex-grow text-gray-700 font-semibold">Add Todo List</span>

                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                                Edit
                            </button>

                            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">Delete</button>
                        </div>
                    </div> :
                    <div>
                        {
                            searcArr == false ?
                                listArr.map((el, index) => {
                                    return (
                                        <div className="pt-[0.8vw]" key={index}>

                                            <div className="flex justify-between items-center bg-gray-100 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                                                <input type="checkbox" className="mr-4 h-6 w-6 text-green-600 focus:ring-green-500 border-gray-400 rounded-full" />


                                                <span className=" w-[82%]  text-gray-700 font-semibold">
                                                    {el.list}
                                                </span>

                                                <EditButton onClick={() => editBtn(el.id, el.list)} text={`Edit`} />

                                                <button onClick={() => dispatch(removeTodo(el.id))}
                                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }) :

                                searcArr.map((el, index) => {
                                    return (
                                        <div className="pt-[0.8vw]" key={index}>

                                            <div className="flex items-center bg-gray-100 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                                                <input type="checkbox" className="mr-4 h-6 w-6 text-green-600 focus:ring-green-500 border-gray-400 rounded-full" />

                                                <span className="flex-grow text-gray-700 font-semibold">{el.list}</span>

                                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 mr-2 shadow-md hover:shadow-lg transform hover:scale-105">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                    </svg>
                                                    Edit
                                                </button>

                                                <button onClick={() => dispatch(removeTodo(el.id))} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>
            }
        </div>
    )
}

export default Todolist