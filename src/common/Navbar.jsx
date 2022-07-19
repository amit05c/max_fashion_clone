import React from "react";
import { Box, Stack, Flex, Spacer, Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

// import { AiFillAndroid } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BiStore } from "react-icons/bi";

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
                <Stack direction={{base:"column", md:"row" ,lg: "row"}} spacing="30px">

                    <Flex justify={"center"} gap="5px" alignItems={"center"} marginTop="8px">
                        <TbTruckDelivery justifyItems={"center"} gap="5px" />

                        <Link>Free Shiping</Link>
                    </Flex>

                    <Flex justify={"center"} gap="5px" alignItems={"center"} marginTop="10px">
                        <BiStore />
                        <Link>Return to Store</Link>
                    </Flex>

                    <Flex justify={"center"} gap="5px" alignItems={"center"} marginTop="10px">
                        <BiStore />
                        <Link>Click and collect</Link>
                    </Flex>

                    <Spacer />

                    <Stack direction={{base:"column", md:"row", lg: "row"}} spacing="30px" marginRight={"50px"}>
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
            <Box bg="#f7f8f7" w="100%"  color="black" h={'60px'}>
              
              <Flex>
                <Box boxSize='sm' w={'8%'} mt="-18px">
                  <Link><Image src='/Navbar/New Max Logo- Eng With Outline_1_1.png' alt='logo' width={'100%'} /></Link>  
                </Box>

               
                <Flex gap="30px">
                <Link>Women</Link>
                <Link>Men</Link>
                <Link>Girl</Link>
                <Link>Boy</Link>
               </Flex>


                </Flex>
            </Box>

            amit
        </Box>
    );
};

export default Navbar;
