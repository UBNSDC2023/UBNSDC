import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'



function AppLayout() {
  return (
    <>
    <Navbar/>
        <Outlet/>
    <Footer/>
    
    </>
  )
}

export default AppLayout