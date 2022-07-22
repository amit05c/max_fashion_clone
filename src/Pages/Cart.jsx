import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Box, Flex, Image, Link,Text,Grid,Button,Select,Center } from "@chakra-ui/react";

const Cart = () => {
    const [quant,setQuant] = useState(1)
    const {state} = useContext(CartContext) 
    const [ans,setAns] = useState(0)
    

    const handleQuantity= (q,i)=>{
        // let ans= eval(q*p)
        console.log(i)
     setQuant(q)
    //  setAns(ans)
    }
  return (
    <Flex direction={'column'} gap="1rem">
   {state.map(el=>(
    <Box key={el.id} border={"1px solid black"} w={'40%'} m={"auto"}>
  <Center><Image src={el.imgUrl}  /></Center>  
    <Box><Text>{el.price}</Text></Box>
    
       {el.size ?  <Button>{`Selected size: ${el.size}`}</Button> : ""} 
      {el.size ? <Select name="quantity" onClick={(e)=>handleQuantity(+e.target.value,el.id)}> 
        <option >select quantity</option>
        <option value={'2'}>1</option>
        <option value={'2'}>2</option>
        <option value={'3'}>3</option>
        <option value={'4'}>4</option>
       </Select> : ""} 
     {el.text? <Text>{`Price: ${el.price} x ${quant}=${eval(el.price*quant)}`}</Text> : ""}  
     {!el.text? <Button>Remove item</Button> : ""} 
  </Box>
   ))}
   
  <Box><Text>Total price</Text></Box>
    </Flex>
  )
}

export default Cart