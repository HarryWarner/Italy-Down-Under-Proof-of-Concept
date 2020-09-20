import React from "react"
// import Link from "gatsby-link"
import Logo from "../res/logo.jpg"
import Cap from "../res/Capture.png"




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
                {/* <h1>Italy DownUnder</h1> */}
                {/* <img src = {Cap} className = "cap"></img> */}
            
                <svg className = 'svg'>
              
                        <text fill="#f3cf98" stroke="#000" >
                            Italy DownUnder
                            </text>
                   
                </svg>
            </section>
      </div>
}
 


}

export default LogoSection