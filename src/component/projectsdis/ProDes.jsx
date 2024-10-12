import React from 'react'

import style from './prodes.module.css'
function ProDes({item}) {
    const {id,img,code,view}=item
  return (
    <div className={style.item}>
      <div className={style.imgcon}>
            <img src={img} alt="" />
      </div>
      <div className={style.view}>
      <a target="_blank" href={code} className={style.viewbtn}>source code</a> 
      <a target="_blank" href={view} className={style.viewbtn}>Project view</a>
      </div>
    </div>
  )
}

export default ProDes
