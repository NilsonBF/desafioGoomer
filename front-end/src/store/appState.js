import { observable } from "mobx";

const altera_UserName = (param) => {
  appState.userName = param.trim();
};

const toggle_Dialog = () => {
  appState.menuDialog = !appState.menuDialog;
};

const altera_Cardapio = (param) => {
  appState.cardapio = param;
};

const appState = observable({
  userName: "",
  altera_UserName,
  menuDialog: false,
  toggle_Dialog,
  cardapio: {},
  altera_Cardapio
});

export default appState;
