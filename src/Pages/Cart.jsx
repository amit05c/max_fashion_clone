import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Box, Flex, Image, Link,Text,Grid,Button,Select,Center } from "@chakra-ui/react";

const Cart = () => {
    const [quant,setQuant] = useState(1)
    const {state} = useContext(CartContext) 
    const [ans,setAns] = useState(0)
    

    const handleQuantity= (q,p)=>{
        let ans= eval(q*p)
     setQuant(q)
     setAns(ans)
    }
  return (
    <Flex direction={'column'}>
   {state.map(el=>(
    <Box key={el.id} border={"1px solid black"} w={'40%'} m={"auto"}>
  <Center><Image src={el.imgUrl}  /></Center>  
    <Box><Text>{el.price}</Text></Box>
    
       {el.size ?  <Button>{`Selected size: ${el.size}`}</Button> : ""} 
       <Select name="quantity" onChange={(e)=>handleQuantity(+e.target.value,el.price)}>
        <option >select quantity</option>
        <option value={'2'}>1</option>
        <option value={'2'}>2</option>
        <option value={'3'}>3</option>
        <option value={'4'}>4</option>
       </Select>
       <Text>{`Price: ${el.price} x ${quant}=${ans}`}</Text>
  </Box>
   ))}
   
  
    </Flex>
  )
}

export default Cart