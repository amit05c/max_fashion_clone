import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react'

const Login = () => {
const [info,setInfo] = useState({})
const [data,setData] = useState([])
const [ login,setLogin] = useState({})

const handleInfo= (e)=>{
     const {name,value} = e.target
     setInfo({
      ...info,
      [name]:value
     })
}


  const handleSubmit=(e)=>{
    e.preventDefault()
    setData([...data,info])
    console.log(data)
    localStorage.setItem("userData", JSON.stringify(data))
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
      }else{
        console.log("Login failed")
      }
    }
  }

  return (
    <Flex justify={'space-around'}>
      <Box>
    <form onSubmit={handleSubmit}>
      {/* <Text>Signup</Text> */}

      <label>Email address</label>
      <input type='email' name="email" onChange={handleInfo} />
      <input type='password' name="password" onChange={handleInfo} />
      <input type="submit" />
    </form>
     </Box>
 
  <Box>
     <form onSubmit={handleLogin}>
       <Text>Login</Text>
       <label>Email address</label>
       <input type='email' name="email" onChange={handleChange} />
       <input type='password' name="password" onChange={handleChange} />
       <input type='submit' />
       {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
     </form>
    
     </Box>
     </Flex>
  )
}

export default Login