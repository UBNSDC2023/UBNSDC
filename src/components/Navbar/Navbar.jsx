
import  { useState } from 'react'
import logo from '../../../assets/nsdc-logo.png'
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

  window.addEventListener('resize',showButton)
  return (
    <>
      <nav className='navbar'>
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
              <NavLink to='/meet-the-board' className='nav-links'>
                Meet The Board
              </NavLink>
              </li>
            
            <li className='nav-item last'>
              <NavLink to='/Activities' className='nav-links' onClick={closeMobileMenu}>
                <p className='lastfucking'>
                  Activities
                  </p>
                  </NavLink>
                  </li>
          

           
            
           
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

{/* <ul className={click ? 'fas menu-active' : 'fas menu'}>
          <li className='navbar-item'>
            <Link to='/' className='' onClick={closeMobileMenu}>
              Home
            </Link>
          </li> */}

{/* <ul className={click ? 'fas menu-active' : 'fas menu'}>
          <li className='navbar-item'>
            Home
          </li>
        </ul> */}

{/* <>
      <nav className="navbar">
        <a href="https://nebigdatahub.org/nsdc/">
          <img className = 'navbar-img' src={logo} alt="" />
        </a>
        {/* <ul className='navbar-menu-items'>
          <li>Home</li>
          <li>Contact</li>
          <li>About Us</li> */}

    //     <div className= 'menu-icon' onClick={handleClick}>
    //       <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
    //     </div>
    //     <ul className={click ? 'fas menu-active' : 'fas menu'}>
    //       <li className='navbar-item'>
    //         <Link to='/'>
    //           Home
    //         </Link>
    //       </li>
    //     </ul>

    //   </nav>
    // </> }