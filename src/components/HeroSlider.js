import React, { useEffect } from 'react'; 
import { Swiper, SwiperSlide,  } from 'swiper/react';
 
 import MovieCard from './MovieCard';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
 
export default function HeroSlider(props){
const [searchResults,setSearchResults] = React.useState(props.setSearchResults)
 

const key =React.useId();

const list = props.setSearchResults.map(movie =>{
 
  return  <SwiperSlide key={props.key} > <MovieCard  item ={movie}   
   
 /></SwiperSlide>
})
  return (
    <Swiper  className='swiper'
      slidesPerView={'5'}
      loop={true}
      effect={'coverflow'}
      grabCursor={true}
      spaceBetween={20}
 
     
 
    >
       {list}
     </Swiper>
   
  )
}