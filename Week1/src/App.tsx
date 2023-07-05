import { Route, Routes } from 'react-router-dom';
import Root from './pages/Root'
import About from './pages/About';
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
