import React, { useEffect } from 'react'
import { Box,Image } from '@chakra-ui/react'

const WomenCarousel  = () => {
  

    useEffect(()=>{
        setInterval(()=>{
            // console.log(`amit`)
            // return <div> <img src="" alt="" /></div>
        },3000)
    },[])
  return (
    <Box bg='' w='100%' p={4} color='white'  padding='0'>
    <Image src="/womenImg/MAX-Banner1-desktop-Women-14JULY2022.png" w={'100%'} />
    </Box>
  )
}

export default WomenCarousel 