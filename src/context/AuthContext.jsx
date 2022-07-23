import React, { Children, createContext, useReducer } from "react";

export const AuthContext = createContext()

const authReducer= (state1,action)=>{
   switch(action.type){
    case "login":{
        return {
          ...state1,
          status:true,
          name:action.name
        }
    }

    case "logout":{
       return {
        ...state1,
        status:false,
        name:""
       }
    }

    default:{
       return state1
    }

   }

}
const init={
    status:false,
    name:""
}
export const AuthProvider= ({children})=>{
    const [state1,dispatch1] = useReducer(authReducer,init)
    return (
        <AuthContext.Provider value={{state1,dispatch1}}>{children}</AuthContext.Provider>
    )
}