import React from "react"
import Nav from './components/navigation'
// import Hero from './components/staticqueryhero'

import Whitespace from './components/whitespace'
import Header from './components/header'
import Video from './components/video'
import { StaticQuery, graphql } from "gatsby"
import Carousel from './components/carousel'
import LogoSection from './components/logo'
import Footer from './components/footer'




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
        <LogoSection/>
        <Nav/>
        
        {/* <Hero/> */}

        {/* Will parse props which are assigned values returned by GraphQL */}
        <Whitespace title = "Story Title" subtitle = "Subtitle (if wanted)"/>

        {/* <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      /> */}

      <Carousel/>

      <div className = "contentArea">

        <h2>Heading</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget aliquet nibh praesent tristique magna sit. Etiam sit amet nisl purus in mollis nunc sed. Porta nibh venenatis cras sed felis eget. Aliquam purus sit amet luctus venenatis lectus. Risus sed vulputate odio ut enim blandit volutpat maecenas. Amet risus nullam eget felis eget nunc lobortis mattis. Amet nisl purus in mollis nunc sed. Maecenas volutpat blandit aliquam etiam erat velit. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Vel elit scelerisque mauris pellentesque. Mauris cursus mattis molestie a iaculis at. Varius quam quisque id diam vel quam elementum pulvinar etiam. Adipiscing elit ut aliquam purus sit amet. Orci sagittis eu volutpat odio facilisis mauris sit. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Morbi leo urna molestie at elementum. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Duis ut diam quam nulla porttitor massa id neque aliquam.
</p><p>
Semper quis lectus nulla at volutpat diam ut venenatis tellus. Quam vulputate dignissim suspendisse in est ante in. Venenatis urna cursus eget nunc scelerisque viverra. Donec enim diam vulputate ut pharetra sit amet aliquam id. Sed odio morbi quis commodo odio. Duis at tellus at urna condimentum mattis pellentesque. Lobortis mattis aliquam faucibus purus in massa. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Pulvinar mattis nunc sed blandit libero volutpat. Tincidunt arcu non sodales neque sodales ut. Mollis aliquam ut porttitor leo. Auctor augue mauris augue neque gravida in fermentum et. In mollis nunc sed id semper risus in. Justo eget magna fermentum iaculis eu non.
</p><p>
Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Faucibus purus in massa tempor nec feugiat nisl. Integer vitae justo eget magna. Gravida rutrum quisque non tellus. Massa eget egestas purus viverra accumsan in. Lectus mauris ultrices eros in. Dictum at tempor commodo ullamcorper a lacus. Commodo elit at imperdiet dui accumsan. Purus non enim praesent elementum facilisis leo vel fringilla. Urna porttitor rhoncus dolor purus non. Purus ut faucibus pulvinar elementum integer. Egestas congue quisque egestas diam in arcu.
</p><p>
Et tortor consequat id porta. Volutpat commodo sed egestas egestas fringilla phasellus. Nisi lacus sed viverra tellus. Vitae tortor condimentum lacinia quis vel eros donec ac. Vitae nunc sed velit dignissim. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Nibh ipsum consequat nisl vel pretium. Nec ullamcorper sit amet risus. Ut consequat semper viverra nam libero justo laoreet. Molestie at elementum eu facilisis sed odio. Eget nunc lobortis mattis aliquam. Eget nunc lobortis mattis aliquam faucibus purus. Molestie nunc non blandit massa enim nec dui nunc. Morbi tristique senectus et netus et malesuada. Turpis egestas maecenas pharetra convallis posuere. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet mattis vulputate enim nulla aliquet. Tristique senectus et netus et malesuada fames ac turpis.
</p><p>
Nibh venenatis cras sed felis eget. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Semper risus in hendrerit gravida. Facilisi nullam vehicula ipsum a arcu. Ac tincidunt vitae semper quis. Donec adipiscing tristique risus nec feugiat in. Vitae justo eget magna fermentum iaculis eu non. Scelerisque eu ultrices vitae auctor eu augue ut. Elit pellentesque habitant morbi tristique senectus et netus et. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Proin libero nunc consequat interdum. Aliquet nibh praesent tristique magna. Id eu nisl nunc mi ipsum faucibus. Sed turpis tincidunt id aliquet risus feugiat in ante. In metus vulputate eu scelerisque felis. Sagittis aliquam malesuada bibendum arcu vitae. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Lacus luctus accumsan tortor posuere ac ut consequat. Risus sed vulputate odio ut enim blandit volutpat. Morbi tincidunt augue interdum velit.
</p>
        </div>

        <Footer/>

  </div>
    
  )}
  />
  )
}



