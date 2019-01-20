import React, { Component } from "react";
import { observer } from "mobx-react";
import appState from "../../store/appState";

import {
  Navbar,
  FormControl,
  Button,
  FormGroup,
  Glyphicon
} from "react-bootstrap";

const CustomUsername = observer(
  class CustomUsername extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: ""
      };
    }

    render() {
      return (
        <Navbar.Collapse>
          {([undefined, null, ""].includes(appState.userName.trim()) && (
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl
                  type="text"
                  value={this.userName}
                  placeholder="Insira seu nome"
                  onKeyPress={(e) =>
                    e.charCode === 13 &&
                    appState.altera_UserName(this.state.userName)
                  }
                  onChange={(e) => this.setState({ userName: e.target.value })}
                />
              </FormGroup>{" "}
              <Button
                onClick={() => appState.altera_UserName(this.state.userName)}
              >
                <Glyphicon glyph="chevron-right" />
              </Button>
            </Navbar.Form>
          )) || <Navbar.Text>Bem Vindo, {appState.userName}!</Navbar.Text>}
        </Navbar.Collapse>
      );
    }
  }
);

export default CustomUsername;
