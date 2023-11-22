 import React, { useEffect } from "react";
 import Header from './components/Header'
 import HeroSlider from "./components/HeroSlider";
 
 export default  function App(props) {
  const [topInputValue, setTOPInputValue] =React.useState('')
  const [searchResults, setSearchResults] = React.useState([]);

  const getHeroWithMovies = (setTOPInputValue) => {
    const url = `http://www.omdbapi.com/?s=Star Wars&apikey=5bd71ded&`;
   (fetch(url).then(response=> response.json()).then(res =>setSearchResults(res.Search)))
};
useEffect(()=>
getHeroWithMovies(),setSearchResults)
  // const [hero, setHero] =React.useState(<StartHero/> );
  // const routes ={
  //   home: {
  //     component: () =>  <StartHero/>
  //   },
  //   Cartoons: {
  //     component: () => <CartoonsHero/>
  //   }
  // }
  // const BASE_URL = 'http://www.omdbapi.com/?apikey=5bd71ded';
  // const key = '5bd71ded'
  // const options = {
  //     method: 'GET'
  // }   
   
  const getMovieRequest = (setTOPInputValue) => {
      const url = `http://www.omdbapi.com/?s=${topInputValue}&apikey=5bd71ded&`;
     (fetch(url).then(response=> response.json()).then(res =>setSearchResults(res.Search)))
      
    
  };
 const handleClick =() =>{
  getMovieRequest()
 }

//  const changeHero =(url) =>{

//  }
  return (
 
      <div className='page_wrapper'>
               <section className="hero">
          <Header setTOPInputValue={setTOPInputValue} setSearchResults={handleClick}/>
          <div className="hero_heading_wrapper">
            <h1 className="hero_heading">In the end, it doesn't matter what story you're filming if you can create your own world on screen.</h1>
          </div>
         
               </section>   
               <section className="hero-slider">
                 <HeroSlider setSearchResults={searchResults}/>
               </section> 
      </div>
      
    )
 
}

