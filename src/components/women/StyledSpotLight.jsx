import React from 'react'
import { Box, Flex, Image, Link } from "@chakra-ui/react";

const StyledSpotLight = () => {
  return (
    <Box>
        <Flex justify={"space-around"} width='100%'>
       <Link width={"45%"}> <Image src={"./womenImg/texturedTops.png"} width="100%"/></Link>
       <Link width={"45%"} ><Image src={"./womenImg/jeans.png"} width="100%"/></Link> 

        </Flex>
    </Box>
  )
}

export default StyledSpotLight