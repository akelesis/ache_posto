import React from "react";

import "./MenuShipping.css";

const MenuShipping = (props) => {
  const redirectToRoutes = () => {
    props.history.push("/manage-routes");
  };

  return (
    <div className="menu-shipping">
      <div className="menu-item active" onClick={redirectToRoutes}>
        <p>Gerenciar Rotas</p>
      </div>
      <div className="menu-item">
        <p>Dashboards</p>
      </div>
      <div className="menu-item">
        <p>Organização de Frota</p>
      </div>
      <div className="menu-item">
        <p>Painel de Motoristas</p>
      </div>
      <div className="menu-item">
        <p>Gerenciar Consumo</p>
      </div>
    </div>
  );
};

export default MenuShipping;
