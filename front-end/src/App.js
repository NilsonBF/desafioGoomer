import React, { Component } from "react";
import "./App.css";
import { observer } from "mobx-react";
import appState from "./store/appState";
import { Grid } from "react-bootstrap";

import CustomNavbar from "./components/header/CustomNavbar";
import Restaurantes from "./components/Restaurantes";
import Home from "./components/Home";

const App = observer(
  class App extends Component {
    render() {
      return (
        <div className="App">
          <CustomNavbar />
          <Grid>
            {([undefined, null, ""].includes(appState.userName.trim()) && (
              <Home />
            )) || <Restaurantes />}
          </Grid>
        </div>
      );
    }
  }
);

export default App;
