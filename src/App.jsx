import './css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// pages
import Home from './pages/Home'
import Todo from './pages/Todo'
import Gym from './pages/Gym'
import NotFoundPage from './pages/NotFoundPage'

// components
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/todo' element={<Todo />}/>
      <Route path='/gym' element={<Gym />}/>
      <Route path='/*' element={<NotFoundPage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
