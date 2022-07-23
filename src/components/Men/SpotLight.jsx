import React from 'react'
import {NavLink} from 'react-router-dom'
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import styles from "./men.module.css"
const SpotLight = () => {
  return (
    <Box>
        <Flex justify={"space-around"} width='100%'>
       <NavLink to={'/topswear'} width={"45%"}> <Image className={styles.help} src={"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock7-oneBythree-A-Men-18JULY2022.png"} width="100%"/></NavLink>

       <NavLink to={'/jeanswear'} width={"45%"} ><Image className={styles.help} src={"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock7-oneBythree-B-Menn-18JULY2022.png"} width="100%"/></NavLink> 


        </Flex>
    </Box>
  )
}

export default SpotLight