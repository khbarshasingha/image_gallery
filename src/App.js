import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UploadButton from "./UploadButton.js";

class App extends Component {
  // constructor() {
  //   super(props);
  //   this.state = {
  //     image: ""
  //   };
  // }
  searchChange = event => {
    const files = event.target.files;
    console.log("data files", files);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <UploadButton onchange={this.searchChange} />
        </div>
      </div>
    );
  }
}

export default App;
