import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Nav from './components/navigation'
import Hero from './components/Hero'
import SectionHeading from './components/whitespace'
import LogoSection from './components/logo'
import Footer from './components/footer'
import SimpleCard from './components/SimpleCard'
import Header from './components/header'
import ContentArea from './components/contentArea'

import "./styles/stylesheet.css"


export default function About() {
  return ( 
    <StaticQuery
    query={graphql`
    query aboutQuery {
      sanityPage(title: {eq: "About"}) {
        title
        body {
          children {
            text
          }
        }
      }
    }
  `}
  
   
  render={data => (
  <div>
    <Header/>
    <LogoSection/>
    <Nav/>  
  <br/>
  <br/>

    <div className = "contentArea">
        <SectionHeading title = {data.sanityPage.title} subtitle = ""/>
        <div id = "content">
          <img src = "" alt="image"/>
          <img src = "" alt="image"/>
          <img src = "" alt="image"/>

          <p> Italy DownUnder is the new sister site of Perfect Traveller and was created to present to an Australian audience the varied and profound influences the Italian culture has had on us all DownUnder.</p>
                {/* <p>{data.sanityPage.body.children.text}</p> */}
        </div>
    </div>
    
  <br/>

    <Footer/>

</div>
  )}
  />
  )
}
