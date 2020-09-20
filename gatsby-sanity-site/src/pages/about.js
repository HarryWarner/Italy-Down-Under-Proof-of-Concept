import React from "react"
import Nav from './components/navigation'
import Hero from './components/Hero'

import SectionHeading from './components/whitespace'
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
    query about {
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
    {/* <Hero imageurl = "https://unsplash.it/2500/1200" heroText = "Melbourne" subText = "cool city. lots to do."/> */}

<br/>
<br/>
    <div className = "contentArea">
        <SectionHeading title = "About" subtitle = "What we do"/>

<div id = "content">
        <h1>Heading</h1>
        <p> information pertaining to heading</p>
        
        <h1>Rinse</h1>
        <p> and repeat</p>

        <h1>This</h1>
        <p>can go on forever</p>

        <h1>And Then</h1>
        <p>a little bit longer</p>

        <h1>Just Once More</h1>
        <p>ok, now im done</p>
    
</div>
        

    </div>
    
    <br/>

<Footer/>



  </div>
  )}
  />
  )
}
