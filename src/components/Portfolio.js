import React from 'react'
import './Portfolio.css'
import portfolioImg from './portfolioSample.jpg'
import { useState } from 'react'


export default function Portfolio() {
    const projects=[{
        image:portfolioImg,
        name:'Portfolio Website',
        link:'',
        tag:'all react'}]
    const [filteredProjects, setfilteredProjects]=useState(projects);
  return (
    <div className='portfolioContainer'><h2>PORTFOLIO</h2>
    <div><ul><li className='activePort'>ALL</li><li>HTML/CSS/JAVASCRIPT/REACT</li><li>WORDPRESS</li></ul></div>
    <div className='projects'>{filteredProjects.map((project)=>(<div><img src={project.image}/></div>))}</div>
    </div>
  )
}
