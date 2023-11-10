import React from 'react'
import './Join.css'
import Navbar from '../../components/Navbar/Navbar'
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';
import logo from '../../../assets/nsdc-logo.png'

function Join() {
  return (
    <>
      <div className='header'>
        <h1 className='heading'>Join US</h1>
        <p className='text'>Welcome to UBNSDC Join us now to contribute to something big</p>
      </div>
      <div className='groupme-container'>

        <div className='groupme-text-container'>
          <h1 className='groupme-text-header'>Become a Member by Joining <br /> us on Group Me</h1>
          <p className='groupme-text-para'>Yo bruv join on group me innit</p>
        </div>

        <img className= 'groupme-img' src={logo} alt="" />


      </div>
      <div className='social-container'>

        <div className='social-discord'>
          <h4 className='social-heading' >Join us on Discord</h4>
          <Link className='discord-icon'>
            <BsDiscord size={30} color='purple'/>
          </Link>
          
        </div>
        <div className='social-insta'>
          <h4 className='social-heading'>Join us on Insta</h4>
          <Link className='instagram-icon'>
            <BsInstagram size={30} color='purple'/>
          </Link>
        </div>
        <div className='social-twitter'>
          <h4 className='social-heading'>Join us on Twitter</h4>
          <Link className='twitter-icon'>
            <BsTwitter size={30} color='light blue'/>
          </Link>
        </div>
      </div>

      <div className='groupme-container'>

        <div className='groupme-text-container'>
          <h1 className='groupme-text-header'> Main List Sign Up</h1>
          <p className='groupme-text-para'>click the below link to give more information about u add <br />a pressable button below with hover effect</p>
      
        </div>

        <img className= 'groupme-img' src={logo} alt="" />

      </div>
    </>
  )
}

export default Join