import React, { Component } from 'react'
import "./portfolioItem.scss";

export class PortfolioItem extends Component {


    openUrl=()=>{

        const {urlProp} = this.props;

        if(urlProp!== undefined){
            window.open(urlProp,'_blank');
        }
    }


    render() {

        const {imageProp,titleProp} = this.props;


 
        return (
            <div className="divItem" onClick={this.openUrl}>
                <img src={imageProp} alt="" />
                <h3>{titleProp}</h3>
            </div>
        )
    }
}

export default PortfolioItem
