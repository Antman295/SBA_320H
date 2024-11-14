import { Routes, Route } from 'react'
import Make from './pages/Make';
import Model from './pages/Model';
import Info from './pages/Info';
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path = '/' element={ <Make />} />
      <Route path = '/:make' element={ <Model />} />
      <Route path = '/:make/:model' element={<Info />} />
    </Routes>
    </>
  )
}

export default App
