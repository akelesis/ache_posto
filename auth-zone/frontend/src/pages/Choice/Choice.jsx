import React from "react";

import "./Choice.css";

const Choice = (props) => {
  const redirectGasStation = () => {
    props.history.push("/gas-station");
  };

  const redirectShipping = () => {
    props.history.push("/shipping");
  };

  return (
    <div className="choices">
      <div className="gas-station" onClick={(e) => redirectGasStation()}>
        <h1>Portal Meu Posto</h1>
      </div>
      <div className="shipping" onClick={(e) => redirectShipping()}>
        <h1>Portal Minha Transportadora</h1>
      </div>
    </div>
  );
};

export default Choice;
