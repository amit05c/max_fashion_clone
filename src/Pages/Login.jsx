import React, { useContext, useState } from 'react'
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
const [info,setInfo] = useState({})
const [data,setData] = useState([])
const [ login,setLogin] = useState({})
const navigate= useNavigate()

const {state1,dispatch1} = useContext(AuthContext)
   console.log(state1)
const handleInfo= (e)=>{
     const {name,value} = e.target
     setInfo({
      ...info,
      [name]:value
     })
}


  const handleSubmit=(e)=>{
    e.preventDefault()
    

    if(info.name=="" || info.password==""||info.email==""){
      
      
      alert('Fill all details')
    }else{
      
      setData([...data,info])
      localStorage.setItem("userData", JSON.stringify(data))
    }

    console.log(data)
    
    
  }


  const handleChange= (e)=>{
    const {name,value} = e.target
    setLogin({
     ...info,
     [name]:value
    })
  }


  const handleLogin = (e)=>{
    e.preventDefault()
    let userInfo= JSON.parse(localStorage.getItem('userData')) || []

    for(let i=0; i<userInfo.length; i++){
      if(userInfo[i].email== login.email && userInfo[i].password==login.password){
        console.log("Login success")
        console.log(userInfo[i].name)
        dispatch1({type:"login", status:true, name: userInfo[i].name })
        // state1.status ? return {<Navigate to="/mens"/>} : {<Navigate to={'/login'}/>    }
        console.log(state1.status)
        navigate('/')
      }else{
        console.log("Login failed")
      }
    }
  }

  return (
    <Flex justify={'space-around'} width={'100%'} h={'20rem'} mt={'4rem'} >
      <Box bg={'#f7f8f7'} border="1px solid black" p={'1rem'}>
        <Text color="blue" fontFamily={"fantasy"}>Signup</Text>
    <form onSubmit={handleSubmit}>
    
      <Flex gap={'1rem'} mb="1rem">
        <label><b>Name</b></label>
        <input type="text" placeholder='enter name' name="name" onChange={handleInfo} style={{backgroundColor:'#f7f8f7'}} />
      </Flex>
      <Stack></Stack>
      <Flex gap={'1rem'} mb="1rem">
      <label><b>Email address</b></label>
      <input type='email' name="email" onChange={handleInfo} placeholder='enter email' style={{backgroundColor:'#f7f8f7'}} />
      </Flex>
      <Stack/>
      <Flex gap={'1rem'} mb="1rem">
      
      <label><b>Password</b></label>
      <input type='password' name="password" onChange={handleInfo} placeholder='enter password' style={{backgroundColor:'#f7f8f7'}} />
      </Flex>
      {/* <Stack/> */}
      <br />
      <input type="submit" style={{backgroundColor:'blue',color:'white', marginTop:"1rem", borderRadius:"20%"}} />
    
    </form>
    </Box>
 
  <Box border={"1px solid black"} p={'1rem'}>
     <form onSubmit={handleLogin}>
       <Text fontFamily={"fantasy"} color="blue">Login</Text>

       <Flex gap={'1rem'} mb="1rem">
       <label><b>Email</b></label>
       <input type='email' name="email" onChange={handleChange} />
       </Flex>
       <Flex gap={'1rem'} mb="1rem">
        <label><b>Password</b></label>
       <input type='password' name="password" onChange={handleChange} />
       </Flex>
       
       <input type='submit' style={{backgroundColor:'blue',color:'white', marginTop:"1rem", borderRadius:"20%"}} />
       {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
     </form>
    
     </Box>
     </Flex>
  )
}

export default Login