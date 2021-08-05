import React, { Component } from 'react';
import "./portfolio.scss";

class Portfolio extends Component {
    render() {
        return (
            <div className="divMainPortfolio" id="portfolio">
                <h1>Portfolio</h1>
                <ul>
                    <li>
                        Featured
                    </li>
                    <li>
                        Web App
                    </li>
                    <li>
                        Desktop App
                    </li>
                </ul>
                <div className="divContainer">
                    <div className="divItem">
                        <img src="assets/projects/tarfPage1.png" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio
