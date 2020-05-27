import React from "react";

import "./MenuGas.css";

const MenuGas = (props) => {
  function redirectDashBoards() {
    props.history.push("/gas-station-panel/dashboards");
  }

  return (
    <div className="menu-gas">
      <div className="menu-item-gas active">
        <p>Dependencias e Produtos</p>
      </div>
      <div className="menu-item-gas" onClick={redirectDashBoards}>
        <p>Dashboards</p>
      </div>
      <div className="menu-item-gas">
        <p>Lista de Opiniões</p>
      </div>
      <div className="menu-item-gas">
        <p>Cadastrar Promoções</p>
      </div>
      <div className="menu-item-gas">
        <p>Compras de Pacotes</p>
      </div>
    </div>
  );
};

export default MenuGas;
