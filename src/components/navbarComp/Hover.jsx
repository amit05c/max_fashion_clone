import React from 'react'
import style from "./hover.module.css"

const Hover = ({title}) => {
  return (
    <div>

<div className={style.dropdown}>
  <button className={style.dropbtn}>{title}</button>
  <div className={style.dropdownContent}>
    <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
    <div>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
    </div>

    <div>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
    </div>
    
    <div>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
    </div>
    <div>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
      <p>Jeans</p>
    </div>
    
    </div>
    
  </div>
</div>

    </div>
  )
}

export default Hover