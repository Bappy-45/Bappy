import React, { useState } from 'react';
import style from './naver.module.css';
import { Link} from 'react-router-dom'

import { FiAlignCenter } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

function Naver() {
    const [menu, setMenu] = useState("Home");
    const [menuVisible, setMenuVisible] = useState(false);

    const showMenu = () => {
        setMenuVisible(true);
    };
    
    const hideMenu = () => {
        setMenuVisible(false);
    };

    return (
        <div className={style.naver}>
           
        <Link to={"Bappy/"}> <h1 className={style.logo}>Mh-Bappy</h1></Link>  

            <div className={`${style.navul} ${menuVisible ? style.show : ''}`}>
                <RxCross1 onClick={hideMenu} className={style.icon1} />
                <ul className={style.naverMenu}>
                    
                 <li><Link to={"Bappy/"} onClick={() => { setMenu("Home"); hideMenu(); }} className={menu === "Home" ? style.active : ""}>Home</Link></li>
                    
                    
                        <li><a href='#about' onClick={() => { setMenu("About Me"); hideMenu(); }} className={menu === "About Me" ? style.active : ""}>About Me</a></li>
                    
                   
                       <li><a href='#about'  onClick={() => { setMenu("Projects"); hideMenu(); }} className={menu === "Projects" ? style.active : ""}>Projects</a></li> 
                    
                </ul>
            </div>
            <FiAlignCenter onClick={showMenu} className={style.icon} />
        </div>
    );
}

export default Naver;
