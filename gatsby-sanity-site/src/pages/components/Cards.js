import React from "react"
import { StaticQuery, graphql } from "gatsby"



export default function Hero() {
  return (
    <StaticQuery
      query={graphql`
      query CardsQuery {
        allSanityStory {
          nodes {
            title
            metaDescription
          }
        }
      }
      
      `}

      render={data => (
        
        <div>
                {/* <WhiteSpace/> */}
                 <h1>{data.allSanityStory.nodes.title}</h1>   
                 <h1>{data.allSanityStory.nodes.metaDescription}</h1>            

         
          
        </div>
      )}
    />
  )
}