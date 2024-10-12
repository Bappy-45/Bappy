import React from 'react'
 import style from './header.module.css'
import {pic} from '../../assets/assets'
import { FaClone } from "react-icons/fa";
function Header({heroData,setHero,hero}) {
  const openWhatsApp = () => {
   
    window.open('https://wa.me/01304230249', '_blank');
  };
  return (
    <div className={style.header}>
      <div className={style.headerCon}>
        <span className={style.span}>Hello</span>
        <span className={style.text}>I'm  <span className={style.Bappy}>Bappy</span>
           <span className={style.iName}> <br /> <span className={style.text1}>{heroData.text1}</span> </span>

        </span>
        <p> I am a skilled and professional front-end developer <br /> with experience in creating visually appealing and user-friendly websites.</p>
        <div className={style.btn} onClick={openWhatsApp}>
        <FaClone className={style.icon}/>
        <p className={style.btnn} >
          Heir me
        </p>
        </div>
      </div>
      <img src={pic.Bappy2} alt="" className={style.bg} />
    </div>
  )
}

export default Header

