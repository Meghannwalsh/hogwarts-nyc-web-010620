import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";


class App extends Component {
  state = {
    hogs: hogs,
    selectedHogs: [],
    // filter: "all"
  }

  filterHogs = (param) => {
    return this.state.hogs.select((hog) => hog.greased === param )
  }

  handleChange = (event) => {
    if(event.target.value === "greased"){
      let arr = []

      this.state.hogs.forEach(hog => {
        if (hog.greased === true){
          arr.push(hog)
        }
      })

      this.setState({
        selectedHogs: arr
      })

    } else if (event.target.value === "ungreased"){
      let arr = []

      this.state.hogs.forEach(hog => {
        if (hog.greased === false){
          arr.push(hog)
        }
      })

      this.setState({
        selectedHogs: arr
      })

    } else {

      this.setState({
        selectedHogs: this.state.hogs
      })

    }

  }

  render() {
    console.log(this.state.selectedHogs) 
    console.log(this.state)
    return (
      <div className="App">
        <Nav />
        <HogContainer handleChange={this.handleChange}hogs={this.state.selectedHogs}/>
        
      </div>
    );
  }
}

export default App;
