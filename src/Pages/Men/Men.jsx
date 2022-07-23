import { Box, Image, Link,Text } from '@chakra-ui/react'
import React from 'react'
import Catagory from '../../components/Men/Catagory'
import SpotLight from '../../components/Men/SpotLight'
import WomenCarousel from '../women/WomenCarousel '
import styles from './men.module.css'

const imgUrl= ['https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner1-desktop-Men-19JULY2022.png',
'https://lmsin.net/cdn-cgi/image/w=1232,q=85,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner7-desktop-CommonB2G2-17JUNE2022.gif',

'https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner5-desktop-Men-18JULY2022.png'
]
const Men = () => {
  return (
    <Box mb={'2rem'}>
      <Box bg="blue" w="100%" p={4} color="white">
      <Text className={styles.help}>Sale Final Call! + Buy 2 get 2 Free</Text> 
      </Box>
      
      <WomenCarousel imgUrl={imgUrl}/>

      <Box mt={'30px'}>
      {/* <Link><Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner5-desktop-Men-18JULY2022.png" w={'100%'} m='auto'/></Link>   */}
      </Box>
        <SpotLight />

        <Catagory/>
    </Box>
  )
}

export default Men