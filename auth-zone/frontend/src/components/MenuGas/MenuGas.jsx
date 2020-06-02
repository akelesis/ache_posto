import React, { useState } from "react";

import "./MenuGas.css";

const MenuGas = (props) => {
  const [products, setProduct] = useState("active");
  const [dashboards, setDashboards] = useState("");
  const [evaluations, setEvaluations] = useState("");
  const [registerPromo, setRegisterPromo] = useState("");
  const [packBuying, setPackBuying] = useState("");

  function redirectProducts() {
    setProduct("active");
    setDashboards("");
    setEvaluations("");
    setRegisterPromo("");
    setPackBuying("");

    props.history.push("/gas-station-panel");
  }

  function redirectDashboards() {
    setProduct("");
    setDashboards("active");
    setEvaluations("");
    setRegisterPromo("");
    setPackBuying("");

    props.history.push("/gas-station-panel/dashboards");
  }

  function redirectEvaluations() {
    setProduct("");
    setDashboards("");
    setEvaluations("active");
    setRegisterPromo("");
    setPackBuying("");

    props.history.push("/gas-station-panel/evaluations");
  }

  function redirectPromo() {
    setProduct("");
    setDashboards("");
    setEvaluations("");
    setRegisterPromo("active");
    setPackBuying("");

    props.history.push("/gas-station-panel/promotions");
  }

  function redirectPackBuying() {
    setProduct("");
    setDashboards("");
    setEvaluations("");
    setRegisterPromo("");
    setPackBuying("active");

    props.history.push("gas-station-panel/buy-packages");
  }

  return (
    <div className="menu-gas">
      <div className={"menu-item-gas " + products} onClick={redirectProducts}>
        <p>Dependencias e Produtos</p>
      </div>
      <div
        className={"menu-item-gas " + dashboards}
        onClick={redirectDashboards}
      >
        <p>Dashboards</p>
      </div>
      <div
        className={"menu-item-gas " + evaluations}
        onClick={redirectEvaluations}
      >
        <p>Lista de Opiniões</p>
      </div>
      <div className={"menu-item-gas " + registerPromo} onClick={redirectPromo}>
        <p>Cadastrar Promoções</p>
      </div>
      <div
        className={"menu-item-gas " + packBuying}
        onClick={redirectPackBuying}
      >
        <p>Compras de Pacotes</p>
      </div>
    </div>
  );
};

export default MenuGas;
