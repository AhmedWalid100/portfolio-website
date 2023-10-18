import React from 'react'
import './Footer.css'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
function Footer() {
  return (
    <div className='footerContainer'>
        <div><AiFillLinkedin className='socialIcons'/><AiFillGithub className='socialIcons' /></div>
        <div><p>Copyright © Ahmed Walid. All rights reserved</p></div>
    </div>
  )
}

export default Footer