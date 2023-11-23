import React from "react";
import { SwiperSlide } from "swiper/react";
import Swiper from "swiper";
import NotFavoriteIcon from "./notfavourite";
import FavouriteIcon from "./favourite";
 
export default function MovieCard(props) {
    const {Poster, Title, Year, imdbID}=props.item;

    const [isFavourite,setIsFavourite] =React.useState(false);
    const [favouritesList,setFavouritesList] = React.useState('');
    const [favIcon,setFavIcon] = React.useState(<NotFavoriteIcon/>)


    React.useEffect(()=> 
    {ifFavouriteCheck()},[]);
    React.useEffect(()=> isFavourite ?setFavIcon(<FavouriteIcon/>) : setFavIcon(<NotFavoriteIcon/>),[isFavourite]);
  const ifFavouriteCheck =() =>{
    const favouritesList = localStorage.getItem('favouritesList') || '';
    setIsFavourite(favouritesList.includes(imdbID));
    setFavouritesList(favouritesList);
  }
    const handleToFavorite = () =>{
    const favouritesList = localStorage.getItem('favouritesList') || '';
    const separator = favouritesList.length ? ',' : '';
    if(!isFavourite) {
      localStorage.setItem('favouritesList', favouritesList + separator +imdbID);
      setIsFavourite(true)
    }  }
  
 const fullPlotRequest = ()=>{
    const url = `http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=5bd71ded&`;
     (fetch(url).then(response=> response.json()))
  };
 



    return(
    
        <div className="swiper-slide"  >
             <div className="toFavorites_container" onClick={handleToFavorite}  data-id={imdbID}  imdbID={imdbID} setIsFavourite={setIsFavourite}>
 
     
     {favIcon}
 
    

  </div >   
                {Poster ? <img src={Poster} className='movieCardPoster' alt="moviePoster" /> :null}
                <div className="movie_card_desc">
                <p className="movie_card_year">{Year}</p>
                <h3 className="movie_card_title">{Title || 'N/A'}</h3>
                <a className="movie_card_details" href='#' data-id={imdbID} onClick={fullPlotRequest}> </a>
              
                </div>
        </div>
   
    )
}