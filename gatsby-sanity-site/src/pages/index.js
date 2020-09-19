import React from "react"
import Nav from './components/navigation'
import Hero from './components/Hero'

import Whitespace from './components/whitespace'
import LogoSection from './components/logo'
import Footer from './components/footer'

import SimpleCard from './components/SimpleCard'
import Header from './components/header'
import ContentArea from './components/contentArea'

import { StaticQuery, graphql } from "gatsby"



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
    <Hero imageurl = "https://unsplash.it/2500/1200" heroText = "Melbourne" subText = "cool city. lots to do."/>

    <div className = "contentArea">
    <Whitespace title = "Melbourne" subtitle = "cool city. lots to do."/>


    <div className = "flexbox-container">
      <div><SimpleCard/> </div>   
      <div><SimpleCard/></div>     
      <div><SimpleCard/></div>
      <div><SimpleCard/></div>   
      <div><SimpleCard/></div>     
      <div><SimpleCard/></div>
      

    </div>

    

    </div>
    
    <br/>

<Footer/>



  </div>
  )}
  />
  )
}
