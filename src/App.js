import React from 'react';
import { Contact, Intro, Portfolio, Topbar, Works, Menu } from "./components";
import "./app.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state={
      menuOpen: false,
      workFromPortfolio:0
    }
  }

  getPortfolioItem=(e=null)=>{
      try {
        if(e!==null){
          // console.log(e);
          this.setState({
            workFromPortfolio:e
          })
        }
      } catch (error) {
        console.log(error);
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
          <Intro className="child"></Intro>
          <Portfolio className="child" chooseWorkProp={this.getPortfolioItem}></Portfolio>
          <Works className="child" workIndexProp={this.state.workFromPortfolio}></Works>
          <Contact className="child"></Contact>
        </section>
      </div>
    );

  }
}
export default App;
