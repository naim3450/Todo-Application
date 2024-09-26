import React from 'react'
import Account from './Component/Account'
import Search from './Component/Search'
import AddTodo from './Component/AddTodo'
import Todolist from './Component/Todolist'

function App() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <Account />
        <Search />
        <AddTodo />
        <Todolist />
      </div>
    </div>
  )
}

export default App