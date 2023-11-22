import React, { useEffect } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
 import MovieCard from './MovieCard';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
export default function HeroSlider(props){
const [searchResults,setSearchResults] = React.useState(props.setSearchResults)
 
const key =React.useId();
 
const list = props.setSearchResults.map(movie =>{
  return  <SwiperSlide> <MovieCard item ={movie} key={key}/></SwiperSlide>
})
  return (
    <Swiper  className='swiper'
      slidesPerView={'5'}
      loop={true}
      effect={'coverflow'}
      grabCursor={true}
      spaceBetween={18}
      searchResults={searchResults}
      coverflowEffect={{
        rotate: 5,
        stretch: 0,
        depth: 30,
        modifier: 2,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
       {list}
     </Swiper>
   
  )
}