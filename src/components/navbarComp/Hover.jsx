import React from 'react'
import style from "./hover.module.css"
import { Link } from 'react-router-dom'

const Hover = ({title}) => {
  return (
    

<div className={style.dropdown}>
  <button className={style.dropbtn}>{title}</button>
  <div className={style.dropdownContent}>
    <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>

    <div>
     <Link to="/polo">Jeans</Link> 
      <Link to="/jeanswear"><p>Top</p></Link>
      <Link to="/jeanswear"><p>Innerwear</p></Link>
      <Link to="/jeanswear"><p>Bottom wear</p></Link>
      <Link to="/jeanswear"><p>Saree</p></Link>
      <Link to="/jeanswear"><p>Kurta</p></Link>
    </div>

    <div>
    <Link to="/polo">Jeans</Link> 
      <Link to="/jeanswear"><p>Top</p></Link>
      <Link to="/jeanswear"><p>Innerwear</p></Link>
      <Link to="/jeanswear"><p>Bottom wear</p></Link>
      <Link to="/jeanswear"><p>Saree</p></Link>
      <Link to="/jeanswear"><p>Kurta</p></Link>    </div>

    <div>
    <Link to="/jeanswear">Jeans</Link> 
      <Link to="/jeanswear"><p>Top</p></Link>
      <Link to="/jeanswear"><p>Innerwear</p></Link>
      <Link to="/jeanswear"><p>Bottom wear</p></Link>
      <Link to="/jeanswear"><p>Saree</p></Link>
      <Link to="/jeanswear"><p>Kurta</p></Link>
    </div>

    
    
    
    
    </div>
    
  </div>
</div>

    
  )
}

export default Hover