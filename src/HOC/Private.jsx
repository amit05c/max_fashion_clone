import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {Navigate} from "react-router-dom"

const Private = ({children}) => {
    const {state1} = useContext(AuthContext)
    if(state1.status){
        return children
    }else{
        return <Navigate to={"/login"}/>
    }
  
}

export default Private