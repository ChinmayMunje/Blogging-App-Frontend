import React, { useEffect, useState } from 'react'
import { AiFillYoutube } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Modal from './Modal';
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp';
import { isLoggedIn, doLogOut, getCurentUserDetails } from '../auth';
const Headers = () => {

  const navigate = useNavigate()
  // const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurentUserDetails());
  }, [login])


  const logOut = () => {
    doLogOut(() => {
      setLogin(false)
      navigate("/")
    })
  }

  const printUserName = (name)=>{
    // return name.split('@')[0];
    let username = name.charAt(0).toUpperCase() + name.slice(1)
    let fullName = username.split('@')[0]

    return fullName;
}

  return (
    <header>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <img src="https://osf.digital/library/media/osf/digital/modules/product-summary/bloglink-logo.png" alt="logo" className='w-[180px]' />
        <ul className='flex gap-4 md:gap-14'>
          <li className='text-blue-950 hover:font-bold cursor-pointer'>
            <Link to='/'>Home</Link>
          </li>
          <li className='text-blue-950 hover:font-bold cursor-pointer'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='text-blue-950 hover:font-bold cursor-pointer'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='text-blue-950 hover:font-bold cursor-pointer'>
            <Link to='/dashboard'>Create Post</Link>
          </li>
        </ul>
        <div className='flex gap-5'>
          {login && (
            <>
              {/* <div onClick={logOut}>Logout</div> */}
              <button className='rounded-md px-8 py-2 flex items-center text-[14px] font-bold text-blue-950 border-[2px] border-blue-900' onClick={logOut}>Logout</button>
              <div className='font-bold'>{printUserName(user.username)}</div>
            </>
          )}
          {!login && (
            <>
              <button className='rounded-md px-8 py-2 flex items-center text-[14px] font-bold text-blue-950 border-[2px] border-blue-900' onClick={() => setOpenModal(true)}>Login</button>
              <button className='bg-blue-950 text-white font-bold rounded-lg px-8 py-2 flex items-center text-[14px]' onClick={() => setSignupModal(true)}>SignUp</button>
            </>
          )}

        </div>

        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Login />
        </Modal>

        <Modal open={signupModal} onClose={() => setSignupModal(false)}>
          <SignUp />
        </Modal>

      </nav>
    </header>
  )
}

export default Headers