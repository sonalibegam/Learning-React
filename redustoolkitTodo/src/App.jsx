import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />

    </>
  )
}

export default App


// redux is different , react is different react is core library and redux is independent library also an implementation for wiring for react and redux communication

// when we use redux troolkit almost all work done automatically

// start making store

//
