import React, { createContext, useReducer } from "react";

export const CartContext= createContext()

const cartReducer= (state,action)=>{
   switch(action.type){
    case "add":{
        return [ 
            ...state,
            {
            id:action.id,
            imgUrl:action.imgUrl,
            size: action.size,
            price: action.price,
            color: action.color,
        }]
    }
    
    case "delete":{



        state.splice((action.id-1),1)
        console.log(state)
        return state

        // state.filter(el=>{
        //     console.log(el)
        //     if(el.id!=action.id){
        //      return [...state]
        //     }
        // })
        // return [
            
            // {
            // id:action.id,
            // imgUrl:action.imgUrl,
            // size: action.size,
            // price: action.price,
            // color: action.color
        // }
    // ]

    }

    default:{
       return state
    }
   }
}

const initVal=[{
    imgUrl:"",
    size:'',
    price:'',
    color:'',
    id:''
}]

export const CartProvider=({children})=>{

    const [state,dispatch]= useReducer(cartReducer,initVal)

    return(
        <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
    )
}