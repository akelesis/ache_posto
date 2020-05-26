import React from "react";

import MenuGas from "./template/MenuGas";
import HeaderGas from "./template/HeaderGas";
import ContentGas from "./template/ContentGas";

import "./GasStationPanel.css";

const GasStationPanel = (props) => {
  return (
    <div className="gas-station-panel">
      <HeaderGas />
      <MenuGas />
      <ContentGas />
    </div>
  );
};

export default GasStationPanel;
