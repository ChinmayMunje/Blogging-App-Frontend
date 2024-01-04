import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Pages/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Components/BlogPostForm'
import PrivateRoute from './Components/PrivateRoute'
import Dashboard from './Components/Dashboard'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home'
import PostPage from './Pages/PostPage'
import Footer from './Components/Footer'
function App() {

  return (
    <Router>
      <NavBar />
      <ToastContainer position='bottom-center' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/blogs' element={<BlogList/>}/> */}
        <Route path='/posts/:postId' element={<PostPage/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user' element={<PrivateRoute />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
