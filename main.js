import React from "react"

export default function Main(){
    return (
        <div className="Main">
            <h1 className="Name">Dharmraj Mandloi</h1>
            <h2 className="Role">Frontend Developer</h2>
            <div className="Btns">
                <button className="mail"><img className="mail-icon" src="Mail.png" />Email</button>
                <button className="linkedin"><img className="linkedin-icon" src="linkedin.png"/>LinkedIn</button>
            </div>
            <div className="content">
                <h3>About</h3>
                <p className="about">I am a frontend developer with interest in Web3. I am also learning solidity. I am also planning to open a YouTube channel for podcasts.</p>
                <h3>Interests</h3>
                <p className="interests">Travel. Coffee. Music. Handball. Cricket. Entrepeneur. Public Speaking. Driving</p>
            </div>
        </div>
    )
}