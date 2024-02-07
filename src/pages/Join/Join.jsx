import React from 'react'
import './Join.css'
import Navbar from '../../components/Navbar/Navbar'
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';
import insta from '../../assets/instagram.png'
import groupme from '../../assets/Group-logo.png'
import Button from '../../components/Button/Button';
import { IconContext } from 'react-icons';
import JoinForm from '../../components/Join-Form/joinForm';

function Join() {
  return (
    <>
      <div className='header'>
        <h1 className='heading'>Join US</h1>
        <p className='text'>Welcome to UBNSDC Join us now to contribute to something big</p>
      </div>
      <div className='groupme-container'>
        <div className='groupme-text-container'>
          <h1 className='groupme-text-header'>Become a Member by Joining us on Group Me</h1>
          <p className='groupme-text-para'>Yo bruv join on group me innit Yo bruv join on group me innitYo bruv join on group me innit Yo bruv join on group me innitYo bruv join on group me innit Yo bruv join on group me innit </p>
        </div>
        <div className='groupme-box'>
          <img className= 'groupme-img' src={groupme} alt="" />
          <Button buttonStyle='btn--outline'>
            Become A Member
          </Button>
        </div>

      </div>
      <div className='social-container'>

        <div className='social-discord'>
          <p className='social-heading' >Join us on Discord</p>
          <Link className='discord-icon'>
            <BsDiscord className = 'discord-icon' size={30} color='purple'/>
          </Link>
          
        </div>
        <div className='social-insta'>
          <p className='social-heading'>Join us on Insta</p>
          {/* <Link className='instagram-icon'>
            <BsInstagram className = 'instagram-icon' size={30} color='purple'/>
          </Link> */}
          <img src={insta} className='instagram-logo' />
        </div>
        <div className='social-twitter'>
          <p className='social-heading'>Join us on Twitter</p>
          <IconContext.Provider value={{ color: '#0000FF', className: "twitter-icon"}}>
            <BsTwitter size={30}/>
          </IconContext.Provider>
          {/* <Link className='twitter-icon'>
            <BsTwitter className = 'twitter-icon' size={30} color='light blue'/>
          </Link> */}
        </div>
      </div>

      <h1 className='info-heading'>Get Involved and saty up to date</h1>
      

      <div className='info-container'>

        <div className='groupme-container'>
        <div className='groupme-box'>
            <img className= 'groupme-img' src={groupme} alt="" />
            <Button buttonStyle='btn--outline'>
              Become A Member
            </Button>
          </div>
          <div className='groupme-text-container'>
            <h1 className='groupme-text-header'>Become a Member by Joining us on Group Me</h1>
            <p className='groupme-text-para'>Yo bruv join on group me innit Yo bruv join on group me innitYo bruv join on group me innit Yo bruv join on group me innitYo bruv join on group me innit Yo bruv join on group me innit </p>
          </div>
          

        </div>

        <div className='groupme-container'>
        <div className='groupme-box'>
            <img className= 'groupme-img' src={groupme} alt="" />
            <Button buttonStyle='btn--outline'>
              Become A Member
            </Button>
          </div>
          <div className='groupme-text-container'>
            <h1 className='groupme-text-header'>Become a Member by Joining us on Group Me</h1>
            <p className='groupme-text-para'>Yo bruv join on group me innit Yo bruv join on group me innitYo bruv join on group me innit Yo bruv join on group me innitYo bruv join on group me innit Yo bruv join on group me innit </p>
          </div>

          
        </div>

        <JoinForm imgPosition='right' buttonchildren='Click here' headerChildren='This is a header idk lol' paraChildren='This is the para idk what to write here so loooooooollllll'/>



        
        
      </div>
    </>
  )
}

export default Join