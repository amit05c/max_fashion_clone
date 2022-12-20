import React, { useContext, useState } from 'react'
import { useToast } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  Flex,
  Box,
  Stack,
} from '@chakra-ui/react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const [info,setInfo] = useState({
  name:"",
  email:"",
  password: ""
})
// const [data,setData] = useState([])

const [ login,setLogin] = useState({})
const toast= useToast()
const navigate= useNavigate()
let localData= JSON.parse(localStorage.getItem("userData")) || []

const {state1,dispatch1} = useContext(AuthContext)
  //  console.log(state1)
const handleInfo= (e)=>{
     const {name,value} = e.target
     setInfo({
      ...info,
      [name]:value
     })
}

// console.log(info)

  const handleSubmit=(e)=>{
    e.preventDefault()
    

    if(info.name=="" || info.password==""||info.email==""){
      
      
      toast({
        title: `Please fill all the credentials`,
        status: "error",
        position:"top",
        isClosable: true,
      })
    }else{
         let check= localData.filter(el=>el.email==info.email)
      if(check.length==0){
        localData=[...localData,info]
        localStorage.setItem("userData", JSON.stringify(localData))
        toast({
          title: `Signup Successful`,
          status: "success",
          position:"top",
          isClosable: true,
        })

        setInfo({
          name:"",
          email:"",
          password:""
        })
      }else{
        toast({
          title: `User already registered`,
          status: "error",
          position:"top",
          isClosable: true,
        })
      }
      
      
      
    }

    // console.log(data)
    
    
  }


  const handleChange= (e)=>{
    const {name,value} = e.target
    setLogin({
     ...login,
     [name]:value
    })
  }

console.log(login)
  const handleLogin = (e)=>{
    e.preventDefault()
    let count=0
    let user=""
    let userInfo= JSON.parse(localStorage.getItem('userData')) || []

    for(let i=0; i<userInfo.length; i++){
      if(userInfo[i].email== login.email && userInfo[i].password==login.password){

        count++
        user= userInfo[i].name

        // console.log("Login success")
        // console.log(userInfo[i].name)

        // toast({
        //   title: `Login Success`,
        //   status: "success",
        //   position:"top",
        //   isClosable: true,
        // })
        // dispatch1({type:"login", status:true, name: userInfo[i].name })
        // // state1.status ? return {<Navigate to="/mens"/>} : {<Navigate to={'/login'}/>    }
        // // console.log(state1.status)
        // navigate('/')
        break;
      }else{
        // toast({
        //   title: `Login Failed`,
        //   status: "error",
        //   position:"top",
        //   isClosable: true,
        // })
      }
    }
console.log(count)
    if(count>0){
      toast({
        title: `Login Success`,
        status: "success",
        position:"top",
        isClosable: true,
      })
      dispatch1({type:"login", status:true, name: user })
      // state1.status ? return {<Navigate to="/mens"/>} : {<Navigate to={'/login'}/>    }
      // console.log(state1.status)
      navigate('/')
    }
    toast({
      title: `Login Failed`,
      status: "error",
      position:"top",
      isClosable: true,
    })
  }
// check
  return (
    <Flex justify={'space-around'} width={'100%'} h={'20rem'} mt={'4rem'} >
      <Box bg={'#f7f8f7'} border="1px solid black" p={'1rem'}>
        <Text color="blue" fontFamily={"fantasy"}>Signup</Text>
    <form onSubmit={handleSubmit}>
      <Flex direction={"column"} alignItems="center" justify={"center"}>
    
      <Flex gap={'1rem'} mb="1rem" justifyContent={"center"} alignItems="center" p={"1rem"}>
        <label><b>Name</b></label>
        <Input type="text" placeholder='enter name' name="name" value={info.name} onChange={handleInfo} p={['0.5rem','0.8rem','1rem']} />
      </Flex>
      
      <Flex gap={'1rem'} mb="1rem">
      <label><b>Email</b></label>
      <Input type='email' name="email" onChange={handleInfo} value={info.email} placeholder='enter email' p={['0.5rem','0.8rem','1rem']}  />
      </Flex>
    
      <Flex gap={'1rem'} mb="1rem">
      
      <label><b>Password</b></label>
      <Input type='password' name="password" value={info.password} onChange={handleInfo} placeholder='enter password'p={['0.5rem','0.8rem','1rem']} />
      </Flex>
      {/* <Stack/> */}
      <br />
      <Input type="submit" p="0.5rem" bg="green.400" cursor={"pointer"} />
      </Flex>
    </form>
    </Box>
 
  <Box border={"1px solid black"} p={'1rem'}>
     <form onSubmit={handleLogin}>
       <Text fontFamily={"fantasy"} color="blue">Login</Text>

<Flex direction={"column"} align="center">

       <Flex gap={'1rem'} mb="1rem">
       <label><b>Email</b></label>
       <Input type='email' name="email" onChange={handleChange} p={['0.5rem','0.8rem','1rem']} />
       </Flex>
       <Flex gap={'1rem'} mb="1rem">
        <label><b>Password</b></label>
       <Input type='password' name="password" onChange={handleChange} p={['0.5rem','0.8rem','1rem']} />
       </Flex>
       
       <Input type='submit' p="0.5rem" value="Login" bg="green.400" cursor={"pointer"} />
       {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
       </Flex>
     </form>
    
     </Box>
     </Flex>
  )
}

export default Login