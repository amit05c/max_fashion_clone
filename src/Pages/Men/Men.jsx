import { Box, Image, Link } from '@chakra-ui/react'
import React from 'react'
import Catagory from '../../components/Men/Catagory'
import SpotLight from '../../components/Men/SpotLight'
import WomenCarousel from '../women/WomenCarousel '

const Men = () => {
  return (
    <Box>
      <Box bg="blue" w="100%" p={4} color="white">
        This is the Box
      </Box>
      
      {/* <WomenCarousel/> */}

      <Box mt={'30px'}>
      <Link><Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner5-desktop-Men-18JULY2022.png" w={'100%'} m='auto'/></Link>  
      </Box>
        <SpotLight />

        <Catagory/>
    </Box>
  )
}

export default Men