import React, { Component } from 'react'
import "./contact.scss"


class Contact extends Component {
    constructor() {
        super();
        this.state = {
            message: null,
            subject: null,
            reply:false
        }
    }

    handleSubmit = (e) => {

        e.preventDefault();
        const {message, subject} = this.state;

        try {
            //add email validation
            if(message !== ""&& message !== null && subject !== null){
                window.open(`mailto:hkymera2@gmail.com?subject=subject&body=${message}`);
                this.setState({reply:true})
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleInput = (e) => {
        try {
            
            switch (e.target.id) {
                case "inputSubject":
                    this.setState({subject:e.target.value});
                    break;
                case "textareaMessage":
                    this.setState({message:e.target.value});
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="divContactMain" id="contacts">
                <div className="divLeft">
                    <img src="assets/shake.svg" alt="" />
                </div>
                <div className="divRight">
                    <h2>Contact me</h2>
                    <span>Feel free to email me, or to use my fiverr or linkedin link below!</span>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <input type="text" placeholder="Subject" onChange={(e) => this.handleInput(e)} id="inputSubject" />
                        <textarea placeholder="Message" onChange={(e) => this.handleInput(e)} id="textareaMessage">

                        </textarea>
                        <button>Open email</button>
                    </form>
                    {this.state.reply&& <span>Thank you for your message . I will reply to you, first chance I get!</span>}
                    <div className="divRelevantLinks">
                        {/* <a href=""><img src="assets/linkedin.png" alt="" /></a> */}
                        <a href="https://www.fiverr.com/users/herbertkenmera/"><img src="assets/fiverr.png" alt="" /></a>
                        <a href="https://github.com/PlatypusIV"><img src="assets/github.png" alt="" /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
