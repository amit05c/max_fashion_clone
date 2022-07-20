import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Men from './Men/Men'
import Women from "./women/Women"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Women/>}  />
        <Route path='/men' element={<Men/>}  />
    </Routes>
  )
}

export default AllRoutes