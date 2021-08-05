import React, { Component } from 'react';
import {init} from "ityped";
import "./intro.scss";

const jobs = ["Web Developer", "Node.js developer", "Drone pilot"]

class Intro extends Component {

    componentDidMount=()=>{
        const jobSpan = document.querySelector("#jobSpan");
        init(jobSpan,{backDelay:2000,backSpeed:200,showCursor:false,strings:jobs})
    }

    render() {
        return (
            <div className="divMainIntro" id="intro">
                <div className="divLeft">
                    <div className="imgContainer">
                        <img src="assets/FaceForwardOld.png" alt="" />
                    </div>
                </div>
                <div className="divRight">
                    <div className="divWrapper">
                        <h2>Hi There, I'm</h2>
                        <h1>Herbert-Ken Ümera</h1>
                        <h3>Freelance <span id="jobSpan"></span></h3>

                    </div>
                    <a href="#portfolio">
                        <img src="assets/down.png" alt="" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Intro
