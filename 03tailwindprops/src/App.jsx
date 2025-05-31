import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from  './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "sonali",
    age: 20
  }
  let newArr= [1,2,3]

  return (
    <>
     <h1 className=' mb-4 bg-green-400 text-black
     rounded-xl'>Tailwind test</h1>
      <Card username="sonali" btnText="click me"/>
      <Card username="taslima" btnText="visit me"/>
        
    </>
  )
}

export default App
