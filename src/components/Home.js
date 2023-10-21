import React from 'react'
import './Home.css'
import {Link} from 'react-scroll'

export default function Home() {
  return (
    <div id='home'  className='heroContainer'><div><p>Hello, <span>I'm</span></p><h1>Ahmed<span> Walid</span></h1><p><span>Front-End</span> Developer</p>
    <Link to='contact' smooth={true}><button>CONTACT ME</button></Link>
    </div></div>
  )
}
