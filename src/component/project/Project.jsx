import React from 'react'
import style from './project.module.css'
import {projects} from '../../assets/assets'
import ProDes from '../projectsdis/ProDes'
function Project() {
  return (
    <div className={style.project} id='project'>
      <h1>My Project's</h1>
      <div className={style.disList}>
          {
            projects.map((x,index)=>{
              return<ProDes key={index} item={x}/>
            })
          }
      </div>
    </div>
  )
}

export default Project
