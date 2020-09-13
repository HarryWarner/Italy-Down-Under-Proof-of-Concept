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
                        <li><Link to="">About</Link></li>
                        <li><Link to="">Eat</Link></li>
                        <li><Link to="">Drink</Link></li>
                        <li><Link to="">Experience</Link></li>
                        <li><Link to="">Contact</Link></li>
                        <li><Link to="">Blog</Link></li>

                    </ul>
                </nav>
            </div>
        </div>
}



}

export default Navbar