import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Inputs } from './Components/Inputss'
import { Todos } from './Components/Todos'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Inputs />
     <Todos todos={[
      {
        Title:"Anurag",
        Description:"BASE",
        complete: false
      }
     ]} />
    </>
  )
}

export default App
