import React from 'react';
import { Contact, Intro, Portfolio, Testimonials, Topbar, Works, Menu } from "./components";
import "./app.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state={
      menuOpen: false
    }
  }


  openCloseMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    return (
      <div className="App">
        <Topbar menuStateProp={this.state.menuOpen} openMenuProp={this.openCloseMenu} />
        <Menu menuStateProp={this.state.menuOpen} openMenuProp={this.openCloseMenu}/>
        <section className="sections">
          <Intro></Intro>
          <Portfolio></Portfolio>
          <Testimonials></Testimonials>
          <Works></Works>
          <Contact></Contact>
        </section>
      </div>
    );

  }
}
export default App;
