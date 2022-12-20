import React from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import WomenCarousel from "./WomenCarousel ";
import StyledSpotLight from "../../components/women/StyledSpotLight";
import {NavLink} from "react-router-dom"
import styles from "./women.module.css"

  const imgUrl= ['/womenImg/banner1.png',

   '/womenImg/MAX-Banner3-desktopp-Women-18JULY2022.png',
   '/womenImg/MAX-Banner4-desktop-Women-14JULY2022.png',
   'womenImg/MAX-Banner5-desktop-Women-14JULY2022.png',
'https://lmsin.net/cdn-cgi/image/w=1232,q=85,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner7-desktop-CommonB2G2-17JUNE2022.gif',

]
const Women = () => {
  return (
    <Box m={"auto"}>
      <Box bg="blue" w="100%" p={4} color="white">
      <NavLink to="/topswear"><Text className={styles.help}>Sale Final Call! + Buy 2 get 2 Free</Text> </NavLink> 
      </Box>
      
      <WomenCarousel imgUrl={imgUrl}/>

      <Box mt={'30px'}>
      <Link><Image src="/womenImg/flatOffer.png" w={'100%'} m='auto' /></Link>  
      </Box>
        <StyledSpotLight />
    </Box>
  );
};

export default Women;
