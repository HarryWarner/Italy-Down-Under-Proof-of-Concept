import React from "react"
// import { StaticQuery, graphql } from "gatsby"
import LazyHero from 'react-lazy-hero';

import "./../styles/hero-style.css"



class Hero extends React.Component{
	constructor() {
		super()
        // this.state = {count: 0}
	}
	render(){
		return <div className="hero">
	  	<div>
            <LazyHero imageSrc={this.props.imageurl}  parallaxOffset = "20" color='orange' opacity = '0.2'>
                <div className = 'heroText'>
                    <h1 className = "heroh1">{this.props.heroText}</h1>
                    <h3>{this.props.subText}</h3>
                </div>
                
            </LazyHero>

      </div>
  </div>
}
 


}

export default Hero