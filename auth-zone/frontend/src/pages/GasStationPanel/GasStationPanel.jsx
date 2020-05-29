import React from "react";

import MenuGas from "../../components/MenuGas/MenuGas";
import HeaderGas from "../../components/HeaderGas/HeaderGas";
import ContentGas from "../../components/ContentGas/ContentGas";
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
