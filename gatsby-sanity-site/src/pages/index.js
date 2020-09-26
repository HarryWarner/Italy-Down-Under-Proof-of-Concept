import React from "react"
import { StaticQuery, graphql } from "gatsby"


import Nav from './components/navigation'
import Hero from './components/Hero'
import Whitespace from './components/whitespace'
import LogoSection from './components/logo'
import Footer from './components/footer'
import SimpleCard from './components/Card'
import Header from './components/header'
import ContentArea from './components/contentArea'

import melb from './res/city_thumbs/melbourne.jpg'
import syd from './res/city_thumbs/sydney.jpg'
import perth from './res/city_thumbs/perth.jpg'
import bris from './res/city_thumbs/brisbane.jpg'
import adel from './res/city_thumbs/melbourne.jpg'
import darw from './res/city_thumbs/darwin.jpg'
import hoba from './res/city_thumbs/hobart.jpg'



import "./styles/stylesheet.css"


  

export default function Home() {
  return ( 
    <StaticQuery
    query={graphql`
    query indexQuery {
        sanityStory {
            storyType
            title
          }
        }
    
    `}
  
  
  render={data => (
  <div>
    {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}

    <Header/>
    <LogoSection/>
    <Nav/>
    
    
     {/* <Nav/> */}
    
    {/* <Hero/> */}
    {/* <Hero imageurl = "https://unsplash.it/2500/1200" heroText = "" subText = "" hidden = "hidden"/> */}

    <div className = "contentArea">
    <Whitespace title = "Get Started!" subtitle = "select your city"/>


    <div className = "flexbox-container">
      <div><SimpleCard title = "Melbourne" description = "" link = "/experience-template" image={melb}/> </div>   
      <div><SimpleCard title = "Sydney" description = "" link = "/experience-template" image={syd}/></div>     
      <div><SimpleCard title = "Perth" description = "" link = "/experience-template" image={perth}/></div>
      <div><SimpleCard title = "Brisbane" description = "" link = "/experience-template" image={bris}/></div>   
      <div><SimpleCard title = "Adelaide" description = "" link = "/experience-template" image={adel}/></div>     
      <div><SimpleCard title = "Darwin" description = "" link = "/experience-template" image={darw}/></div>
      <div><SimpleCard title = "Hobart" description = "" link = "/experience-template" image={hoba}/></div>


    </div>

    

    </div>
    
    <br/>

<Footer/>



  </div>
  )}
  />
  )
}
