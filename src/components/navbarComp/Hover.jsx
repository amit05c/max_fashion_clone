import React from 'react'
import style from "./hover.module.css"

const Hover = ({title}) => {
  return (
    <div>

<div className={style.dropdown}>
  <button className={style.dropbtn}>{title}</button>
  <div className={style.dropdownContent}>
    <div >
    <p>Link 1</p>
    <p>Link 1</p>
    <p>Link 1</p>
    <p>Link 1</p>
    
    </div>
    
  </div>
</div>

    </div>
  )
}

export default Hover