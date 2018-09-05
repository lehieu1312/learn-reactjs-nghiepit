import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Proudct from "./components/Product";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Proudct />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Proudct />
        </div>
      </div>
    );
  }
}

export default App;
