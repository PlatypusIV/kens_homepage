import React, { Component } from 'react'
import "./portfolioList.scss";


export class PortfolioList extends Component {
    render() {
        return (
            <li className={(this.props.activeProp)?"liListitem active" : "liListem"} onClick={()=>this.props.setSelectedProp(this.props.idProp)}>
                <span>{this.props.titleProp}</span>
            </li>
        )
    }
}

export default PortfolioList
