import React, { useContext } from "react";
import { Box, Stack, Flex, Spacer, Image, Input } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import {NavLink} from "react-router-dom"

// import { AiFillAndroid } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BiStore } from "react-icons/bi";
import { FaCartPlus,FaUserCircle } from "react-icons/fa";
import Hover from "../components/navbarComp/Hover";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";


// function Example() {
//     return <Icon as={TbTruckDelivery} />
//   }

const Navbar = () => {
  const {state} = useContext(CartContext)
  const {state1} = useContext(AuthContext)
  console.log(state1.status)
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
            <TbTruckDelivery justify={"center"} gap="5px" />

            <Link>Free Shiping</Link>
          </Flex>

          <Flex
            justify={"center"}
            gap="5px"
            alignItems={"center"}
            
          > 
          <Flex gap={'0.3rem'} mt={'0.8rem'}>
          <BiStore style={{marginTop:"0.3rem"}} />
            <Link>Return to Store</Link>
          </Flex>
            
          </Flex>

          <Flex
            justify={"center"}
            gap="5px"
            alignItems={"center"}
            marginTop="20px"
          >
            <BiStore style={{marginTop:"0.8rem"}} />
            <Link mt={'0.7rem'}>Click and collect</Link>
          </Flex>

          <Spacer />

          <Stack
            direction={{ base: "column", md: "row", lg: "row" }}
            spacing="30px"
            marginRight={"50px"}
            mt='2rem'
          >
            <Box>
              <Link>Download our apps</Link>
            </Box>

            <Box >
              <Link >Store locator</Link>
            </Box>
    
            <Box>
              <Link>Help</Link>
            </Box>
          </Stack>
        </Stack>
      </Box>
      {/* lower part of navbar */}
      <Box bg="#f7f8f7" w="100%" color="black" h={"60px"}>
        <Flex wrap={{base:"wrap", md:"wrap" }}>
          <Box boxSize="sm" w={"8%"} mt="-5px">
            <NavLink to={'/'}>
              <Image
                src="/Navbar/New Max Logo- Eng With Outline_1_1.png"
                alt="logo"
                width={"100%"}
              />
            </NavLink>
          </Box>

          <Flex gap={'30px'}>
            <NavLink to="/"><Hover title={"Women"}/></NavLink>
            <NavLink to={'/men'}><Hover title={"Men"}/></NavLink>
            <NavLink to={'/men'}><Hover title={"Girl"}/></NavLink>
            <NavLink to={'/men'}><Hover title={"Boy"}/></NavLink>
          </Flex>

        <Flex justify={"space-end"} height={"50px"} gap="50px" width={'50%'} ml={'14%'}  >
          <Box w={'50%'}>
            <Input placeholder="What are you looking for?" size="md" />
          </Box>
          {/* <Spacer/> */}
          
          <Stack direction={"row"} spacing="20px" mt={'10px'} >
          <Link>More</Link>
       {state1.status?  (<Box >{<FaUserCircle style={{fontSize:"20px",marginLeft:"1rem"}}/>}{state1.name}</Box> ): <NavLink  to={'/login'}><Link>Signup/Signin</Link></NavLink> }   
          {/* <Hover/> */}
         <NavLink to={'/cart'}><Box><FaCartPlus />{state.length>1 ? state.length-1 : ""}</Box></NavLink> 
          </Stack>
          
          </Flex>
        </Flex>
      </Box>
      
    </Box>
  );
};

export default Navbar;
