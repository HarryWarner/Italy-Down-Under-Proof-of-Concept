import React from "react"
// import Link from "gatsby-link"
// import Logo from "../res/logo.jpg"


import "./../styles/whitespace-style.css"


class Hero extends React.Component{
	constructor() {
		super()
        // this.state = {count: 0}
	}
	render(){
		return <div className="whitespace-container">
		<h1>Melbourne</h1>
        <p>Melbourne is an exciting urban city surrounded by <br/>unmatched natural beauty. Adventure awaits you.</p>
        <hr/>
      </div>
}
 


}

export default Hero