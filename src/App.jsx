
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'

function App() {


  return (
    <>
      <div className='max-w-3xl mx-auto'>
        <div className=''>
          <Navbar />
          <hr />
        </div>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
