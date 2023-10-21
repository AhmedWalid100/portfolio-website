import React from 'react'
import './Footer.css'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
function Footer() {
  return (
    <div className='footerContainer'>
        <div><a target='_blank' href='https://www.linkedin.com/in/ahmed-walid-572b68249/'><AiFillLinkedin className='socialIcons'/></a>
        <a target='_blank' href='https://github.com/AhmedWalid100'><AiFillGithub className='socialIcons' /></a></div>
        <div><p>Copyright © Ahmed Walid. All rights reserved</p></div>
    </div>
  )
}

export default Footer