import React from 'react'
import styles from "./hoverComp.module.css"
const HoverComp = () => {
  return (
    <div>
        <h2>Display an Element on Hover</h2>

<div className={styles.myDIV}>Hover over me.</div>
<div className={styles.hide}>I am shown when someone hovers over the div above.</div>
    </div>
  )
}

export default HoverComp