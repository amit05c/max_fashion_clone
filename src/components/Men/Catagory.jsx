import React from 'react'

import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import {NavLink} from 'react-router-dom'

const Catagory = () => {
  return (
   <Flex>
   <NavLink to={'/polo'}><Box><Image src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-1-Desktop-Men-18JULY2022.png'/><Text as={"b"}>{`Tees & Polos`}</Text></Box>
</NavLink> 
    <Box><Image src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-2-Desktop-Men-18JULY2022.png'/><Text as={"b"}>{`Bottom Wear`}</Text></Box>

    <Box><Image src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-3-Desktop-Menn-18JULY2022.png'/><Text as={"b"}>{`Inner Wear`}</Text></Box>

    <Box><Image src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-4-Desktop-Men-18JULY2022.png'/><Text as={"b"}>{`Active Wear`}</Text></Box>

    <Box><Image src='https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-6-Desktop-Men-18JULY2022.png'/><Text as={"b"}>{`Outfits Add-ons`}</Text></Box>
   </Flex>
  )
}

export default Catagory