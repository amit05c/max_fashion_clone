import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Men from './Men/Men'
import JeansWear from './women/catagory/JeansWear'
import TopsWear from './women/catagory/TopsWear'
import Women from "./women/Women"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Women/>}  />
        <Route path='/topswear' element={<TopsWear/>}  />
        <Route path='/jeanswear' element={<JeansWear/>}  />


        <Route path='/men' element={<Men/>}  />
        <Route path='/cart' element={<Cart/>}  />
    </Routes>
  )
}

export default AllRoutes