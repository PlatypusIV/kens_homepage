import React, { Component } from 'react';
import { PortfolioList, PortfolioItem } from '..';
import portfolioItems from "../../projects.json";
import "./portfolio.scss";



class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            selected: "featured",
            currentType: "featured"
        }
    }

    componentDidUpdate =(prevProps,prevState)=>{
        try {
            if(this.state.selected !== prevState.selected){
                console.log(this.state.selected)
            }
        } catch (error) {
            console.log(error);
        }
    }

    portfolioTitles = [{ title: "Featured", id: "featured" }, { title: "Web apps", id: "webapps" }]
    //, { title: "Desktop apps", id: "desktopapps" }

    renderPortfolioItems = () => {
        const { selected } = this.state;
        let itemsToRender = [];

        switch (selected) {
            case "featured":

            for(let key in portfolioItems){

                console.log(portfolioItems[key]);
                itemsToRender = portfolioItems[key].map(item => <PortfolioItem imageProp={item.images[0]} titleProp={item.title} urlProp={item.url}/>)
            }
                break;

            default:
                itemsToRender = portfolioItems[selected].map(item =>
                    <PortfolioItem imageProp={item.images[0]} titleProp={item.title} urlProp={item.url}/>

                )
                break;
        }

        return itemsToRender;

    }

    setSelected = (id) => {
        this.setState({
            selected: id
        })
    }

    renderPortfolioTitles = () => {
        const { selected } = this.state;

        return this.portfolioTitles.map(p => <PortfolioList titleProp={p.title}
            idProp={p.id}
            key={p.id}
            activeProp={(selected === p.id) ? true : false}
            setSelectedProp={this.setSelected} />)
    }

    render() {
        console.log(portfolioItems)
        return (
            <div className="divMainPortfolio" id="portfolio">
                <h1>Portfolio</h1>
                <ul>
                    {this.renderPortfolioTitles()}
                </ul>
                <div className="divContainer">


                    {this.renderPortfolioItems()}
                </div>
            </div>
        )
    }
}

export default Portfolio
