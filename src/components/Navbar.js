import React from 'react'
import './Navbar.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import {Link} from 'react-scroll'

export default function Navbar() {
  const [menuState, setMenuState]=useState("navbarFlex");
  const [backgroundState, setBackgroundState]=useState("navContainer");
  const handleBackground=()=>{
    if(window.scrollY>128){
      setBackgroundState("navContainer background")
    }
    else{
      setBackgroundState("navContainer")
    }
  }
  const handleClick=()=>{
    console.log("hello");
    if (menuState==="navbarFlex"){
      setMenuState("navbarFlex phoneActive");
    }
    if (menuState==="navbarFlex phoneActive"){
      setMenuState("navbarFlex");
    }
  }
  window.addEventListener('scroll',handleBackground);
  return (
    <>
    <div className={backgroundState}>
      <ul className={menuState}><Link spy={true} smooth={true} activeClass="active" to='home'><li>HOME</li></Link>
      <Link spy={true} smooth={true} activeClass="active" to='portfolio'><li>PORTFOLIO</li></Link>
      <Link spy={true} smooth={true} activeClass="active" to='about'><li>ABOUT</li></Link>
      <Link spy={true} smooth={true} activeClass="active" to='contact'><li>CONTACT</li></Link>
      </ul>
    </div>
   <div className='hamburger'><AiOutlineMenu onClick={()=>handleClick()}className='hamburgerSize'/></div>
    </>
  )
}




