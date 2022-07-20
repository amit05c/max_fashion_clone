import React from "react";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import WomenCarousel from "./WomenCarousel ";
import StyledSpotLight from "../../components/women/StyledSpotLight";
const Women = () => {
  return (
    <Box>
      <Box bg="blue" w="100%" p={4} color="white">
        This is the Box
      </Box>
      
      <WomenCarousel/>

      <Box mt={'30px'}>
      <Link><Image src="/womenImg/flatOffer.png" w={'100%'} m='auto'/></Link>  
      </Box>
        <StyledSpotLight/>
    </Box>
  );
};

export default Women;
