import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'
import Dashboard from './Components/Dashboard.jsx'
import PostPage from './Pages/PostPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <SignUp/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/user",
        element: <PrivateRoute/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/posts/:postId",
        element: <PostPage/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
