import React from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"
import SearchAndAcc from "./SearchAndAcc"
export default function Header(props){


 
       return (

         <header className='header'>
          <div className="logo_N_nav_wrapper"><Logo/>
           <Navigation/></div>
   
           <SearchAndAcc   setTopInputValue ={props.setTOPInputValue}  setSearchResults={props.setSearchResults}/>
         </header>
         
       )
     }
    
