import React from 'react'
import './Portfolio.css'
import portfolioImg from './portfolioSample.jpg'
import movieImg from './movieSample.jpg'
import scubaImg from './scubaSample.jpg'
import wordPressImg from './wordPressSample.jpg'
import wordPressImgTwo from './wordPressSample2.jpg'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'


export default function Portfolio() {
    
    const openLink=(url)=>{
        window.open(url);
    }
    const projects=[{
        image:movieImg,
        name:'Movie Website',
        link:'https://ahmedwalid100.github.io/movie-website/',
        tag:'all react'},{
        image:portfolioImg,
        name:'Portfolio Website',
        link:'https://ahmedwalid100.github.io/portfolio-website',
        tag:'all react',},
        {
            image:scubaImg,
            name:'Scuba Website',
            link:'https://ahmedwalid100.github.io/scuba-diving-website/',
            tag:'all react'},
        {
            image:wordPressImgTwo,
            name:'wordPress Website',
            link:'https://ahmedwalid-website2.kesug.com/',
            tag:'all wordpress'},
        {
            image:wordPressImg,
            name:'wordPress2 Website',
            link:'https://ahmedwalid-website.kesug.com/',
            tag:'all wordpress'}]
    const [filteredProjects, setfilteredProjects]=useState(projects);
    const[activeState, setActiveState]=useState('all');
    const handleClick= (number)=>{
        if(number=='all'){
            setActiveState('all');
        }
        if(number=='react'){
            setActiveState('react');
        }
        if(number=='wordpress'){
            setActiveState('wordpress');
        }
        const filtered=projects.filter((project)=>project.tag.includes(number));
        setfilteredProjects(filtered);
    }
  return (
    
    <div id='portfolio' className='portfolioContainer'><h2>PORTFOLIO</h2>
    <div><ul><li className={activeState==='all'? 'activePort' : ''} onClick={()=>handleClick('all')}>ALL</li><li className={activeState==='react'?'activePort': ''} onClick={()=>handleClick('react')}>HTML/CSS/JAVASCRIPT/REACT</li>
    <li className={activeState==='wordpress'?'activePort': ''} onClick={()=>handleClick('wordpress')}>WORDPRESS</li></ul></div>
    <motion.div className='projects'>
    <AnimatePresence>{filteredProjects.map((project)=>(<motion.div onClick={()=>openLink(project.link)} key={project.name} animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} layout><img src={project.image}/></motion.div>))}</AnimatePresence>
    </motion.div>
    </div>
  )
}
