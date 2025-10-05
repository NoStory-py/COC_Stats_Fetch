import { useState } from 'react'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HomePage/>
    </>
    )
}

export default App
