import React from "react";

import "./MenuShipping.css";

const MenuShipping = (props) => {
  const teste = () => {
    console.log({ ...props });
  };
  return (
    <div className="menu-shipping">
      <div className="menu-item">
        <p>Gerenciar Rotas</p>
      </div>
      <div className="menu-item" onClick={(e) => teste()}>
        <p>Dashboards</p>
      </div>
      <div className="menu-item">
        <p>Organizar Frota</p>
      </div>
      <div className="menu-item">
        <p>Gerenciar Motoristas</p>
      </div>
      <div className="menu-item">
        <p>Gerenciar Consumo</p>
      </div>
    </div>
  );
};

export default MenuShipping;
