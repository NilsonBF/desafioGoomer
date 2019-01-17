import React, { Component } from "react";
import "./App.css";

import CustomNavbar from "./components/CustomNavbar";
import Restaurantes from "./components/routes/Restaurantes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <Restaurantes />
      </div>
    );
  }
}

export default App;
