import React, { Component } from 'react'
import projects from "../../projects.json";
import "./works.scss";

const projectCount = 2;
class Works extends Component {

    constructor() {
        super();
        this.state = {
            currentSlide: 0
        }
    }

    componentDidUpdate=(prevProps)=>{
        if(prevProps.workIndexProp!==this.props.workIndexProp){
            this.setcurrentSlide(this.props.workIndexProp);
        }
    }


    openUrl = (inputUrl) => {

        if (inputUrl !== undefined) {
            window.open(inputUrl, '_blank');
        }
    }

    //TODO
    //Add reference to project count
    //Temporary solution: local variable
    setcurrentSlide = (slideDir = null) => {
        const { currentSlide } = this.state;
        let newSlideNumber = 0;


        switch (slideDir) {
            case "left":
                (currentSlide <= 0 ? newSlideNumber = 1 : newSlideNumber = currentSlide - 1)
                break;
            case "right":
                (currentSlide >= projectCount - 1 ? newSlideNumber = 0 : newSlideNumber = currentSlide + 1)
                break;
            default:
                if (slideDir !== undefined && slideDir !== null) {
                    newSlideNumber = slideDir
                }
                break;
        }

        // if (slideDir === "left") {
        //     
        // } else if ("right") {
        //     
        // } else {

        // }

        this.setState({
            currentSlide: newSlideNumber
        })

    }

    renderProjects = () => {

        let itemsToRender = [];

        for (let key in projects) {
            itemsToRender = projects[key].map(item => <div className="divContainer">
                <div className="divWorksItem">
                    <div className="divLeft">
                        <div className="divLeftContainer">

                            <div className="divImgContainer">
                                <img src={(item.type === "webapp") ? "assets/globe.png" : "assets/mobile.png"} alt="" />
                            </div>

                            <h2>{item.title}</h2>
                            <p>{item.description}</p>

                            <div className="divTechnologies">
                                <span>Technologies used:</span>
                                <ul>
                                    {item.technologies.map(t => <li>{t}</li>)}
                                </ul>
                            </div>

                            <div className="divVisit">
                                <button className="btnVisit" onClick={() => this.openUrl(item.url)}><span>Visit the site!</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="divRight">
                        <img src={item.images[0]} alt="" />
                    </div>
                </div>
            </div>)
        }

        return itemsToRender;
    }




    render() {
        const { currentSlide } = this.state;
        return (
            <div className="divMainWorks" id="works">
                <div className="divSlider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                    {this.renderProjects()}

                </div>

                <img src="assets/arrow.png" alt="" className="arrow left" onClick={() => this.setcurrentSlide("left")} />

                <img src="assets/arrow.png" alt="" className="arrow right" onClick={() => this.setcurrentSlide("right")} />
            </div>
        )
    }
}

export default Works