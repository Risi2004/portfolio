import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import ScrollToHash from './components/ScrollToHash/ScrollToHash'

function App() {

  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
