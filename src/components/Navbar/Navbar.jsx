
import  { useEffect, useRef, useState } from 'react'
import logo from '../../assets/nsdc-logo.png'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import '../../App.css'


function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const [button, setButton] = useState(true)

  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 190){
      setButton(false)
    }else{
      setButton(true)
    }
  }

  const [navbar, setNavBar] = useState(false);

  const changeBacground = () => {
    if(window.scrollY >= 100) {
      setNavBar(true)
    }
    else{
      setNavBar(false)
    }
  }

  window.addEventListener("scroll", changeBacground)


  return (
    <>
      <nav className={navbar ? "navbar-scrolled" : "navbar"} >
        <div className='navbar-container'>
          <NavLink to='/' >
            <img className='navbar-logo' src={logo} alt="" />
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links'>
                Home
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink to='/join-us' className='nav-links'>
                Join Us
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink to='/About' className='nav-links'>
                About
              </NavLink>
            </li>

    
            
            <li className='nav-item'>
              <NavLink to='/Activities' className='nav-links' onClick={closeMobileMenu}>
                
                  Activities
                  
                  </NavLink>
                  </li>
          

           
            
           
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

