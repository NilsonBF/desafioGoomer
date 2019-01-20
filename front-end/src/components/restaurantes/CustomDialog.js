import React, { Component } from "react";
import * as MT from "@material-ui/core";
import { observer } from "mobx-react";
import appState from "../../store/appState";
import CustomCard from "./CustomCard";
import CustomCardapio from "./CustomCardapio";
import { Jumbotron } from "react-bootstrap";

const dlg_transition = (props) => (
  <MT.Slide direction="up" {...props} timeout={200} />
);

const CustomDialog = observer(
  class CustomDialog extends Component {
    render() {
      return (
        <MT.Dialog
          open={appState.menuDialog}
          TransitionComponent={dlg_transition}
          keepMounted
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          fullWidth
          maxWidth="md"
        >
          <MT.DialogContent>
            {!!appState.cardapio.itensCardapio && (
              <MT.Grid container spacing={16}>
                <MT.Grid item sm={4}>
                  <CustomCard
                    obj={appState.cardapio.restaurante}
                    height="150"
                  />
                </MT.Grid>
                <MT.Grid item sm={6}>
                  {(appState.cardapio.itensCardapio.length > 0 && (
                    <CustomCardapio arr={appState.cardapio.itensCardapio} />
                  )) || (
                    <Jumbotron>
                      <h2>Cardápio indisponível!</h2>
                      <h3>Tente novamente mais tarde.</h3>
                    </Jumbotron>
                  )}
                </MT.Grid>
              </MT.Grid>
            )}
          </MT.DialogContent>
          <MT.DialogActions>
            <MT.Button onClick={appState.toggle_Dialog}>Fechar</MT.Button>
          </MT.DialogActions>
        </MT.Dialog>
      );
    }
  }
);

export default CustomDialog;
