import React from 'react'
import {NavLink} from 'react-router-dom'
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import styles from "./hoverComp.module.css"

const StyledSpotLight = () => {
  return (
    <Box>
        <Flex justify={"space-around"} width='100%'>
       <NavLink to={'/topswear'} width={"45%"}> <Image className={styles.help} src={"./womenImg/texturedTops.png"} width="100%"/></NavLink>
       <NavLink to={'/jeanswear'} width={"45%"} ><Image className={styles.help} src={"./womenImg/jeans.png"} width="100%"/></NavLink> 


        </Flex>
    </Box>
  )
}

export default StyledSpotLight