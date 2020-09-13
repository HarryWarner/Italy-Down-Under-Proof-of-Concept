import React from 'react'
// import Link from 'gatsby-link'
// import Logo from '../res/logo.jpg'
import LazyHero from 'react-lazy-hero';

import './../styles/hero-style.css'


class Hero extends React.Component{
	constructor() {
		super()
        // this.state = {count: 0}
	}
	render(){
		return <div className='container'>
            <LazyHero imageSrc='https://unsplash.it/2500/1200'  parallaxOffset = "20" color='orange' opacity = '0.2'>
                    <h1>Generic Headline to Match a Generic Image</h1>
            </LazyHero>
      </div>
}



}

export default Hero