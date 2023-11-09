
import  { useState } from 'react'
import logo from '../../../assets/nsdc-logo.png'
import './navbar.css'
import { Link } from 'react-router-dom'

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
          <Link to='/' >
            <img className='navbar-logo' src={logo} alt="" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Home' className='nav-links'>
                Home
              </Link>
            </li>

            <li className='nav-items'>
              <Link to='/Join' className='nav-links'>
                Join Us
              </Link>
            </li>

            <li className='nav-items'>
              <Link to='/About' className='nav-links'>
                About
              </Link>
            </li>
            
            <li className='nav-items'>
              <Link to='/Activities' className='nav-links' onClick={closeMobileMenu}>
                Activities
              </Link>
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