import React from 'react'
import style from './footer.module.css'

import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    const handleCall = () => {
        
        window.open('tel:01600787012');
      };

      const openWhatsApp = () => {
       
        window.open('https://wa.me/1234567890', '_blank');
      };
      const handleEmail = () => {
        
        window.open('mailto:your-email@gmail.com');
      };
  return (
    <div className={style.footer} id='footer'>
      <div className={style.footerCon}>
        <div className={style.footerL}>
        <h1>Mh-Bappy</h1>
        <p>I am a skilled and professional front-end developer
        with experience in creating visually appealing and user-friendly websites.</p>

        </div>
        <div className={style.footerC}>
            <h2></h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">My projects</a></li>
                
            </ul>
        </div>
        <div className={style.footerR}>
                <h2 style={{color:"#23BE0A"}}>
                    GET IN TOUCH
                </h2>
                <ul>
              <div className={style.icons}  onClick={openWhatsApp}> <FaWhatsapp/><li>+8801304230239</li></div> 
               <div className={style.icons} onClick={handleCall}><FaPhone /> <li > +8801600787012</li></div> 
              <div className={style.icons} onClick={handleEmail}>  <MdEmail />   <li >mahadihasan230249@gmail.com</li></div> 
                </ul>
        </div>

      </div>
      <hr />
      <p className={style.footrtc}>Mahadi Hasan Bappy</p>
    </div>
  )
}

export default Footer
