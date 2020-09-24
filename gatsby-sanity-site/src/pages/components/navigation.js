import React from "react"
import Link from "gatsby-link"
import Logo from "../res/logo.jpg"

import "./../styles/nav-style.css"


class Navbar extends React.Component{
	constructor() {
		super()
        // this.state = {count: 0}
	}
	render(){

		return <div className = "container">
            <div className = "navbar"> 
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/experience-template">Experience</Link></li>
                        <li><Link to="">Traditions</Link></li>
                        <li><Link to="">Culture</Link></li>
                        <li><Link to="">Food</Link></li>
                        <li><Link to="">Music</Link></li>
                        <li><Link to="/about">About</Link></li>

                    </ul>
                </nav>
            </div>
        </div>
}



}

export default Navbar