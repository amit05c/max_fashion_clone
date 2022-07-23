import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import { DataContext } from '../../../context/DataContext'
import { Box, Flex, Image, Link,Text,Grid,Button,Select } from "@chakra-ui/react";
import styles from "../women.module.css"


const JeansWear = () => {
  const {jeansWear}= useContext(DataContext)
  // console.log(jeansWear)
  const {state,dispatch}= useContext(CartContext)
  const [update,setUpdate] = useState(false)
  
  const [data,setData]=useState(jeansWear)
  const [size,setSize]= useState()

  const handleLow=()=>{
    // console.log("amit")
     let x= data.sort((a,b)=>{return +a.price- +b.price })
        setData(x)
        setUpdate(!update)
    
  }


  const handleHigh=()=>{
    // console.log("amit")
     let x= data.sort((a,b)=>{return +b.price- +a.price })
        setData(x)
        setUpdate(!update)
    
  }




  // console.log(data)
  const handleSubmit=(id)=>{
    
    // console.log(id)
    // console.log(size)
    data.filter(el=>{
      if(el.id==id){
        dispatch({type:'add', id: Date.now(),imgUrl:el.image,size:size, price:el.price})
      }
    })
  }


useEffect(()=>{
  
},[update])
  return (
    <Box mt={'2rem'} >
      <Box mb={'2rem'} >
        <Button  mr={'1rem'} onClick={handleLow}>Low to high</Button>
        <Button onClick={handleHigh}>High to low</Button>
      </Box>
    <Grid templateColumns={{base:`repeat(1,1fr)`,sm:`repeat(2,1fr)`, md: `repeat(3,1fr)`, lg: `repeat(4,1fr)`}}gap="2px">
    {data.map(el=>(
      <Box key={el.id} className={styles.help}>
     <Link>
     <Box>
        <Image src={el.image}/>
         <Text>{el.title}</Text>
      </Box>
         <Text>{el.price}</Text>

         </Link>
         {/* <HoverComp/> */}
         <Select onChange={(e)=>setSize(e.target.value)} name="select">
          {el.size.map((size,i)=>(

          <option key={i} value={size}>{size}</option>
          ))}
         </Select>
         <Button bg='tomato'  onClick={()=>handleSubmit(el.id)}>Add to cart</Button>
    </Box>
        
    ))}
    </Grid>
    </Box>
  )
}

export default JeansWear