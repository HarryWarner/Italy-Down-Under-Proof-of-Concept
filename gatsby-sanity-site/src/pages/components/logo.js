import React from "react"
// import Link from "gatsby-link"
import Logo from "../res/logo.jpg"


import "./../styles/logo-style.css"


class LogoSection extends React.Component{
	constructor() {
		super()
        // this.state = {count: 0}
	}
	render(){
		return <div className="logo-container">
            <section>
                {/* <img src = {Logo} className = "logo"/> */}
                <h1>Italy DownUnder</h1>
            </section>
      </div>
}
 


}

export default LogoSection