import React from "react";
import { SwiperSlide } from "swiper/react";
import Swiper from "swiper";
export default function MovieCard(props) {
 
    const {Poster, Title, Year, imdbID}=props.item;
 
    return(
    
        <div className="swiper-slide">
                {Poster ? <img src={Poster} className='movieCardPoster' alt="moviePoster"/>:null}
                <h3 className="movie_card_title">{Title || 'N/A'}</h3>
                <p className="movie_card_year">{Year}</p>
                <a href='#' data-id={imdbID}>Details</a>
        </div>
   
    )
}