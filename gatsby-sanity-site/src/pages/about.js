import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PortableText from '@sanity/block-content-to-react'

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

import doc from './test.json'

export default function About() {
  return ( 
    <StaticQuery
    query={graphql`
    query aboutQuery {
      sanityPage {
        body {
          _key
          _type
          children {
            _key
            _type
            marks
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

       


        <div id = "content">

          <div class="flex">
            <img src = "https://cdn.sanity.io/images/x9tumrch/production/481cea97ce5472164334ca1e37552f2a95eae58b-1500x1000.jpg?w=1000&h=1000&fit=max" alt="image" className = "flex-image"/>
            <img src = "https://cdn.sanity.io/images/x9tumrch/production/2566d2ffd40ea601deba71dd2938b95fc6c00041-1500x1000.jpg?w=1000&h=1000&fit=max" className = "flex-image" alt="image"/>
            <img src = "https://cdn.sanity.io/images/x9tumrch/production/7a5cf8673851befa90520c174254aae2558e9ad3-1500x1000.jpg?w=1000&h=1000&fit=max" className = "flex-image" alt="image"/>
          </div>
          

        
                {/* <pre>
                  <h1>JSON from sanity </h1>
                  {JSON.stringify(data.sanityPage.body, null, 1)}
                  </pre>*/}
                <hr></hr>
                <pre>
                  <h1>from local json file</h1>
                  {JSON.stringify(data.sanityPage.body, null, 1)}
                  </pre> 

        <PortableText
        blocks={data.sanityPage.body}
        />
        
        </div>
    </div>
    
  <br/>

    <Footer/>

</div>
  )}
  />
  )
}
