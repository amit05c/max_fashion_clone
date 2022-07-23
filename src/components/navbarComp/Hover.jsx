import React from 'react'
import style from "./hover.module.css"
import { Link } from '@chakra-ui/react'

const Hover = ({title}) => {
  return (
    

<div className={style.dropdown}>
  <button className={style.dropbtn}>{title}</button>
  <div className={style.dropdownContent}>
    <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>

    <div>
     <Link><p>Jeans</p></Link> 
      <Link><p>Top</p></Link>
      <Link><p>Innerwear</p></Link>
      <Link><p>Bottom wear</p></Link>
      <Link><p>Saree</p></Link>
      <Link><p>Kurta</p></Link>
    </div>

    <div>
     <Link><p>Jeans</p></Link> 
      <Link><p>Top</p></Link>
      <Link><p>Innerwear</p></Link>
      <Link><p>Bottom wear</p></Link>
      <Link><p>Saree</p></Link>
      <Link><p>Kurta</p></Link>
    </div>

    <div>
     <Link><p>Jeans</p></Link> 
      <Link><p>Top</p></Link>
      <Link><p>Innerwear</p></Link>
      <Link><p>Bottom wear</p></Link>
      <Link><p>Saree</p></Link>
      <Link><p>Kurta</p></Link>
    </div>

    
    
    
    
    </div>
    
  </div>
</div>

    
  )
}

export default Hover