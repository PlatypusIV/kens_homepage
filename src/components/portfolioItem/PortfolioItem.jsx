import React, { Component } from 'react'
import "./portfolioItem.scss";

export class PortfolioItem extends Component {

    openWork=()=>{
        this.props.getPortfolioItemProp(this.props.workIndexProp);
        window.open("#works", '_self');
    }


    render() {
        const {imageProp,titleProp} = this.props;
 
        return (
            <div className="divItem" onClick={this.openWork}>
                <img src={imageProp} alt="" />
                <h3>{titleProp}</h3>
            </div>
        )
    }
}

export default PortfolioItem
