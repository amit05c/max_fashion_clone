import React from 'react'
import {NavLink} from 'react-router-dom'
import { Box, Flex, Image, Link } from "@chakra-ui/react";

const StyledSpotLight = () => {
  return (
    <Box>
        <Flex justify={"space-around"} width='100%'>
       <NavLink to={'/topswear'} width={"45%"}> <Image src={"./womenImg/texturedTops.png"} width="100%"/></NavLink>
       <NavLink to={'/jeanswear'} width={"45%"} ><Image src={"./womenImg/jeans.png"} width="100%"/></NavLink> 


        </Flex>
    </Box>
  )
}

export default StyledSpotLight