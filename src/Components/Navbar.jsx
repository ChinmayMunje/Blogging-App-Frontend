import React, { useEffect, useState } from 'react'
import { AiFillYoutube } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Modal from './Modal';
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp';
import { isLoggedIn, doLogOut, getCurentUserDetails } from '../auth';
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

  const navigate = useNavigate()
  // const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  const navItems = [
    {path: "/", link: "Home"},
      {path: "/about", link: "About Us"},
      {path: "/contact", link: "Contact"},
      {path: "/dashboard", link: "Create Post"},
  ]

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurentUserDetails());
  }, [login])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  const logOut = () => {
    doLogOut(() => {
      setLogin(false)
      navigate("/")
    })
  }


  const printUserName = (name) => {
    // return name.split('@')[0];
    let username = name.charAt(0).toUpperCase() + name.slice(1).split(/(?=[A-Z])/)
    let fullName = username.split('@')[0]

    return fullName;
  }

  const handleLoginSuccess=()=>{
    setOpenModal(false);
  }

  const handleSignupSuccess=()=>{
    setSignupModal(false);
  }

  return (
    <header className='fixed z-50 top-0 left-0 right-0 bg-blue-300 h-[100px]'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <img src="https://osf.digital/library/media/osf/digital/modules/product-summary/bloglink-logo.png" alt="logo" className='w-[180px]' />
       
        {/* <ul className='flex gap-4 text-lg md:gap-14'>
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
        </ul> */}
        <ul className='md:flex gap-12 text-lg hidden font-bold text-blue-900'>
          {navItems.map(({path,link})=>
          <li>
            <NavLink className={({isActive, isPending})=>
          isActive ? "active": isPending ? "pending": ""
          } to={path}>{link}</NavLink>
          </li>
          )}
        </ul>

        <div className='lg:flex gap-5 items-center hidden'>
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
          {openModal && <Login onSuccess={handleLoginSuccess} />}
        </Modal>

        <Modal open={signupModal} onClose={() => setSignupModal(false)}>
          {signupModal && <SignUp onSignupSuccess={handleSignupSuccess}/>}
        </Modal>

        {/* MENU OPTION FOR MOBILE*/}
        <div className='md:hidden'>
          <button className='cursor-pointer' onClick={toggleMenu}>
            {
              isMenuOpen ? <RxCross2 className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
            }
          </button>
        </div>
      </nav>
      {/* DISPLAY MENU OPTION FOR MOBILE*/}
      <div>
      <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-20 bg-white ${isMenuOpen?"fixed top-0 left-0 w-full transition-all ease-out duration-150":"hidden"} `}>
          {navItems.map(({path,link})=>
          <li>
            <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
          </li>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Navbar