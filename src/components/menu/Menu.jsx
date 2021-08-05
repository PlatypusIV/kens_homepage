import React, { Component } from 'react'
import "./menu.scss";

export class Menu extends Component {


    closeMenu=()=>{
        this.props.openMenuProp();
    }



    render() {
        return (
            <div className={(this.props.menuStateProp) ? "divMainMenu active" : "divMainMenu"} >
                <ul>
                    <li>
                        <a href="#intro" onClick={this.closeMenu}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={this.closeMenu}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#testimonials" onClick={this.closeMenu}>
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a href="#works" onClick={this.closeMenu}>
                            Works
                        </a>
                    </li>



                    <li>
                        <a href="#contacts" onClick={this.closeMenu}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu
