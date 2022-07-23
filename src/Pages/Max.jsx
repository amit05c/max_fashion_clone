import React from 'react'
import FooterPart from '../common/Footer'
import Navbar from '../common/Navbar'
import AllRoutes from './AllRoutes'

const Max = () => {
  return (
    <div>
     <Navbar/>
     <div style={{marginBottom:"3rem"}} >
    <AllRoutes />

     </div>
    <FooterPart />
    </div>
    
  )
}

export default Max