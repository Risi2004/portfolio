import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import ProjectsPage from './pages/Projects/ProjectsPage'
import ScrollToHash from './components/ScrollToHash/ScrollToHash'

function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
    </>
  )
}

export default App
