import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Carousel from 'react-elastic-carousel'

import Image from './../res/banner.jpg'

  

export default function Home() {
  return ( 
    <StaticQuery
    query={graphql`
    query imageCarouselQuery {
        sanityImageCarousel {
            imagesCarousel {
              asset {
                url
              }
            }
          }
        }
    `}
  
  
  render={data => (
<div>
<Carousel itemsToScroll={1}>
  <img src = {Image}/>
  <img src = {Image}/>
  <img src = {Image}/>
  <img src = {Image}/>
  <img src = {Image}/>

</Carousel>

</div>


  )}
  />
  )
}

