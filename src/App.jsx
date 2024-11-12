import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Car Details</h1>
      <p>Please enter the car's make. I.E. Ford, Toyota, Audi, etc...</p>
      <p>Please enter the model name.</p>
      <p>Please enter the year.</p>
    </>
  )
}

export default App
