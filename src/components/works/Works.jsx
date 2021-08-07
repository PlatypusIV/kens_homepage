import React, { Component } from 'react'
import projects from "../../projects.json";
import "./works.scss";

class Works extends Component {

    constructor() {
        super();
        this.state = {
            currentSlide: 0
        }
    }


    //TODO
    //Add reference to project count
    setcurrentSlide = (slideDir = null) => {
        const { currentSlide } = this.state;
        let newSlideNumber = 0;


        // (slideDir ==="left") ? (currentSlide>0) ? newSlideNumber = 1:newSlideNumber = currentSlide-1   : (currentSlide>=1)? newSlideNumber = 0:newSlideNumber = currentSlide+1;

        if (slideDir === "left") {
            (currentSlide <= 0 ? newSlideNumber = 1 : newSlideNumber = currentSlide - 1)
        } else {
            (currentSlide >= 1 ? newSlideNumber = 0 : newSlideNumber = currentSlide + 1)

        }

        this.setState({
            currentSlide: newSlideNumber
        })

    }

    renderProjects = () => {

        let itemsToRender = [];

        for (let key in projects) {

            console.log(projects[key]);
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
                                <button className="btnVisit">Visit the site!</button>
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