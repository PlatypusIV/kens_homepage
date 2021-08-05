import React, { Component } from 'react'
import "./topbar.scss";
import { Person, Mail,Phone } from "@material-ui/icons";

class Topbar extends Component {


    openCloseMenu = () => {
        this.props.openMenuProp()
    }

    render() {
        return (
            <div className={(this.props.menuStateProp) ? "divMainTopbar active" : "divMainTopbar"}>
                <div className="divWrapper">
                    <div className="divLeft">
                        <a href="#intro" className="aLogo">
                            <img src={(this.props.menuStateProp) ? "assets/portfolioLogoWhiteOut.png" : "assets/portfolioLogoBlueOut.png"} className="imgLogo">
                            </img>
                        </a>
                        <div className="divItemContainer">
                            <span>
                                <Person className="icon" />

                                Herbert-Ken Ümera
                            </span>
                        </div>
                        <div className="divItemContainer">
                            <Phone className="icon" />

                            <span>+372 56271562</span>
                        </div>
                        <div className="divItemContainer">
                            <Mail className="icon" />
                            <span>hkymera2@gmail.com</span>
                        </div>
                    </div>
                    <div className="divRight">
                        <div className="divHamburger" onClick={this.openCloseMenu}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Topbar
