import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
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
import Navbar from './Components/Navbar'
function App() {

  return (
    <>
    <Navbar/>
    <ToastContainer position='bottom-center'/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
