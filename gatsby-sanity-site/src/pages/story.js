import React from "react"
import Nav from './components/navigation'
// import Hero from './components/staticqueryhero'

import Whitespace from './components/whitespace'
import Header from './components/header'
import Video from './components/video'
import { StaticQuery, graphql } from "gatsby"



import "./styles/stylesheet.css"


  

export default function Story() {
  return (
    <StaticQuery
    query={graphql`
    query whiteSpaceQuery {
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
        
        {/* <Hero/> */}

        {/* Will parse props which are assigned values returned by GraphQL */}
        <Whitespace title = {data.sanityStory.title} subtitle = {data.sanityStory.storyType}/>

        <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />

  </div>
    
  )}
  />
  )
}



