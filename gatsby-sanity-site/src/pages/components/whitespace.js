import React from "react"
// import Link from "gatsby-link"
import Logo from "../res/logo.jpg"


import "./../styles/whitespace-style.css"


class WhiteSpace extends React.Component{
	constructor() {
		super()
        // this.state = {count: 0}
	}
	render(){
		return <div className="whitespace-container">
		<h1>{this.props.title}</h1>
		<p>{this.props.subtitle}</p>
		
        {/* <p>Melbourne is an exciting urban city surrounded by <br/>unmatched natural beauty. Adventure awaits you.</p> */}
        <hr/>
      </div>
}
 


}

export default WhiteSpace