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
import "./styles/aboutStyle.css"

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

          <div class="flex">
            <img src = "https://cdn.sanity.io/images/x9tumrch/production/481cea97ce5472164334ca1e37552f2a95eae58b-1500x1000.jpg?w=1000&h=1000&fit=max" alt="image" className = "flex-image"/>
            <img src = "https://cdn.sanity.io/images/x9tumrch/production/2566d2ffd40ea601deba71dd2938b95fc6c00041-1500x1000.jpg?w=1000&h=1000&fit=max" className = "flex-image" alt="image"/>
            <img src = "https://cdn.sanity.io/images/x9tumrch/production/7a5cf8673851befa90520c174254aae2558e9ad3-1500x1000.jpg?w=1000&h=1000&fit=max" className = "flex-image" alt="image"/>
          </div>
          

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
