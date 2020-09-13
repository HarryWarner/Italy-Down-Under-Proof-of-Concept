import React from "react"
import Link from "gatsby-link"
import instalogo from "../res/instagram-logo.png"
import facebooklogo from "../res/fb-logo.png"
import pintrestlogo from "../res/pintrest-logo.png"
import Logo from "../res/logo.jpg"


import "./../styles/header-style.css"


class Header extends React.Component{
	constructor() {
		super()
        // this.state = {count: 0}
	}
	render(){

		return <div className = "container">
            <div className = "header"> 
                <div className = "logo">
                    <Link to="/"><img src = {Logo} width = "160"></img></Link>
                </div>

                <nav className = "header-links">
                    <ul>
                        <li><a href="https://www.instagram.com/perfect.traveller/?hl=en" target="_blank"><img src = {instalogo} width = "30"></img></a></li>
                        <li><a href="https://www.facebook.com/Perfect-Traveller-Pty-Ltd-171235276220004/" target="_blank"><img src = {facebooklogo} width = "30"></img></a></li>
                        <li><a href="https://www.pinterest.com.au/perfectraveller/" target="_blank"><img src = {pintrestlogo} width = "30"></img></a></li>

                    </ul>
                </nav>
            </div>
        </div>
}



}

export default Header