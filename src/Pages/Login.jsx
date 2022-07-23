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
    <Flex justify={'space-around'} width={'100%'} h={'20rem'} mt={'4rem'}>
      <Box bg={'#f7f8f7'} >
    <form onSubmit={handleSubmit}>
    
      <Flex gap={'1rem'}>
        <label><b>Name</b></label>
        <input type="text" placeholder='enter name' name="name" onChange={handleInfo}  />
      </Flex>

      <Flex gap={'1rem'}>
      <label><b>Email address</b></label>
      <input type='email' name="email" onChange={handleInfo} placeholder='enter email' />
      </Flex>
      
      <Flex gap={'1rem'}>
      
      <label><b>Password</b></label>
      <input type='password' name="password" onChange={handleInfo} placeholder='enter password'  />
      </Flex>
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