import { Route, Routes } from 'react-router-dom';
import Root from './pages/Root'
import About from './pages/About';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
