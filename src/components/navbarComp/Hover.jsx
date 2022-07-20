import React from 'react'
import style from "./hover.module.css"

const Hover = ({title}) => {
  return (
    <div>

<div className={style.dropdown}>
  <button className={style.dropbtn}>{title}</button>
  <div className={style.dropdownContent}>
    <div >
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    </div>
    
  </div>
</div>

    </div>
  )
}

export default Hover