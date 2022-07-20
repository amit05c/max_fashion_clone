import React from "react";
import { Box, Stack, Flex, Spacer, Image, Input } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

// import { AiFillAndroid } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BiStore } from "react-icons/bi";
import Hover from "../components/navbarComp/Hover";

// function Example() {
//     return <Icon as={TbTruckDelivery} />
//   }

const Navbar = () => {
  return (
    <Box>
      <Box
        bg="black"
        w="100%"
        color={"white"}
        paddingLeft="20px"
        paddingBottom={"20px"}
        paddingRight={"40px"}
      >
        <Stack
          direction={{ base: "column", md: "row", lg: "row" }}
          spacing="30px"
        >
          <Flex
            justify={"center"}
            gap="5px"
            alignItems={"center"}
            marginTop="8px"
          >
            <TbTruckDelivery justifyItems={"center"} gap="5px" />

            <Link>Free Shiping</Link>
          </Flex>

          <Flex
            justify={"center"}
            gap="5px"
            alignItems={"center"}
            marginTop="10px"
          >
            <BiStore />
            <Link>Return to Store</Link>
          </Flex>

          <Flex
            justify={"center"}
            gap="5px"
            alignItems={"center"}
            marginTop="10px"
          >
            <BiStore />
            <Link>Click and collect</Link>
          </Flex>

          <Spacer />

          <Stack
            direction={{ base: "column", md: "row", lg: "row" }}
            spacing="30px"
            marginRight={"50px"}
          >
            <Box>
              <Link>Download our apps</Link>
            </Box>

            <Box>
              <Link>Store locator</Link>
            </Box>

            <Box>
              <Link>Help</Link>
            </Box>
          </Stack>
        </Stack>
      </Box>
      {/* lower part of navbar */}
      <Box bg="#f7f8f7" w="100%" color="black" h={"60px"}>
        <Flex>
          <Box boxSize="sm" w={"8%"} mt="-18px">
            <Link>
              <Image
                src="/Navbar/New Max Logo- Eng With Outline_1_1.png"
                alt="logo"
                width={"100%"}
              />
            </Link>
          </Box>

          <Flex gap="30px">
            <Link><Hover title={"Women"}/></Link>
            <Link><Hover title={"Men"}/></Link>
            <Link><Hover title={"Girl"}/></Link>
            <Link><Hover title={"Boy"}/></Link>
          </Flex>


        <Flex justify={"space-evenly"} height={"50px"} gap="50px">
          <Box ml={"50px"}>
            <Input placeholder="What are you looking for?" size="md" />
          </Box>
          
          <Stack direction={"row"} spacing="20px">
          <Link>More</Link>
          <Link>Signup/Signin</Link>
          {/* <Hover/> */}
          </Stack>
          
          </Flex>
        </Flex>
      </Box>
      
    </Box>
  );
};

export default Navbar;
