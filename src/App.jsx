import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Make from './pages/Make';
import Model from './pages/Model';
import Info from './pages/Info';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={ <Make />} />
        <Route path = '/:make' element={ <Model />} />
        <Route path = '/:make/:model' element={<Info />} />
      </Routes>
    </Router>
  )
}

export default App
