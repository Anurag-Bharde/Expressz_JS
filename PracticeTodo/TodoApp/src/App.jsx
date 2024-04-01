import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Inputs } from './Components/Inputss'
import { Todos } from './Components/Todos'



function App() {
  const [count, setCount] = useState(0)
  
   fetch("http://localhost:3000/todos").then(async function(res){
    const jsons=await res.json();
    setCount(jsons.todos)
   })

  return (
    <>
     <Inputs />
     <Todos todos={[
      {}
     ]} />
    </>
  )
}

export default App
