import React from "react"
import Nav from './components/navigation'
import Hero from './components/hero'
import Whitespace from './components/whitespace'
import SimpleCard from './components/SimpleCard'
import Header from './components/header'


// import Test from './components/test-comp'

import "./styles/stylesheet.css"


  

export default function Home() {
  return <div>
    {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}

    <Header/>
     <Nav/>
     
    <Hero/>  
    <Whitespace/>


    <div className = "flexbox-container">
      <div><SimpleCard/> </div>   
      <div><SimpleCard/></div>    
      <div><SimpleCard/></div>
      <div><SimpleCard/> </div>   
      <div><SimpleCard/></div>    
      <div><SimpleCard/></div>
      <div><SimpleCard/> </div>   
      <div><SimpleCard/></div>    
      <div><SimpleCard/></div>
    </div>
    





   {/* <Test ></Test> */}
  </div>
}
