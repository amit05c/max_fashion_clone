import React, { useEffect, useState } from 'react'
import { Box,Image } from '@chakra-ui/react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// const imgUrl= ['https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner1-desktop-Men-19JULY2022.png',
// 'https://lmsin.net/cdn-cgi/image/w=1232,q=85,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner7-desktop-CommonB2G2-17JUNE2022.gif',

// 'https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner5-desktop-Men-18JULY2022.png'
// ]
const WomenCarousel  = ({imgUrl}) => {
  // const [url,setUrl] = useState('')

  // let i=0
  //   useEffect(()=>{
  //  let  id=  setInterval(()=>{
  //         if(i==imgUrl.length){
  //           i=0
  //         }
  //           setUrl(imgUrl[i])
  //           i++
  //         },4000)
  //        return ()=>  clearInterval(id)
  //   },[i])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
  };

  return (
    // <Box bg='' w='90%' p={4} color='white'  padding='0' m={"auto"} mt={'2rem'}>
    // <Image src={url} w={'100%'} />
    // </Box>
    <Slider {...settings} style={{overflow:"hidden"}}>
      {imgUrl.map((el,i)=>(
           <Box key={i} bg='' w='90%' p={4} color='white'  padding='0' m={"auto"} mt={'2rem'}>
           <Image src={el} w={'100%'} margin="auto" />
           </Box>
      ))}
      
    </Slider>
  )
}

export default WomenCarousel 

// /womenImg/MAX-Banner1-desktop-Women-14JULY2022.png