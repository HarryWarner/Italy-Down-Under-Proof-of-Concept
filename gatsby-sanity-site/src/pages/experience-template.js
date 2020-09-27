import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PortableText from '@sanity/block-content-to-react'


import Nav from './components/navigation'
import Hero from './components/Hero'
import Whitespace from './components/whitespace'
import LogoSection from './components/logo'
import Footer from './components/footer'
import SimpleCard from './components/Card'
import Header from './components/header'
import ContentArea from './components/contentArea'
import DropDown from './components/dropdown'





import "./styles/stylesheet.css"


  

export default function Home() {
  return ( 
    <StaticQuery
    query={graphql`
    query experienceQuery {
      allSanityStory {
        edges {
          node {
            body {
              _key
              _type
              style
              list
              _rawChildren
            }
          }
        }
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
    <Hero imageurl = "https://unsplash.it/2500/1200" heroText = "Melbourne" subText = "cool city. lots to do." hidden = "hidden"/>

    <div className = "contentArea">
    <Whitespace title = "Italian Experiences in Melbourne" hidden = "none">
    </Whitespace>
    <DropDown/>
    <pre>
                  <h1>json from sanity</h1>
                  {JSON.stringify(data.allSanityStory.edges, null, 1)}
    </pre> 
    

    <div className = "flexbox-container">
      <div><SimpleCard title = "Story-1" description = "" link = "/story-template" /> </div>   
      <div><SimpleCard title = "Story-1" description = "" link ="/story-template"/></div>     
      <div><SimpleCard title = "Story-1" description = "" link = "/story-template"/></div>
      {/* <div><SimpleCard title = "Story-1" description = "" link = "/story-template"/></div>   
      <div><SimpleCard title = "Story-1" description = "" link = "/story-template"/></div>     
      <div><SimpleCard title = "Story-1" description = "" link = "/story-template"/></div>
      <div><SimpleCard title = "Story-1" description = "" link = "/story-template"/></div> */}
      

    </div>

    

    </div>
    
    <br/>

<Footer/>



  </div>
  )}
  />
  )
}
