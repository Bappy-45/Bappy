import React from 'react'
import style from './about.module.css'

import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
function About() {
  return (
    <div className={style.about} id='about'>
      <h1>About ME</h1>
      <p>
      Hi, I'm Mahadi Hasan Bappy, a skilled Front-End Developer specializing in HTML, CSS, JavaScript, and React. I create responsive, SEO-friendly websites that are optimized for both performance and user experience. Whether you need a custom-built website, mobile-friendly design, or fast-loading pages, I am dedicated to delivering high-quality web solutions tailored to meet your business needs.
      </p>
      <div className={style.aboutcon}>
            <div className={style.box}>
                <div className={style.ricon}><GrReactjs className={style.react}/></div>
                <p>I have a strong knowledge of React.js and a deep understanding of its functionalities. Using React.js, I can create fast, responsive, and visually appealing websites that enhance user experience.</p>
            </div>
            <div className={style.box}>
                <div className={style.ricon}><FaNodeJs className={style.react}/></div>
                <p>I have a strong knowledge of JavaScript and a deep understanding of its functionalities. Using JavaScript, I can create dynamic, responsive, and visually appealing websites that enhance user experience.</p>
            </div>
            
      </div>
    </div>
  )
}

export default About
