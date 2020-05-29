import React from "react";
import { Switch, Route } from "react-router-dom";
import "./ContentGas.css";
import GasStationProducts from "../GasStationProducts/GasStationProducts";
import GasStationDashboards from "../GasStationDashboards/GasStationDashboards";

const ContentGas = (props) => {
  return (
    <div className="content-gas">
      <Switch>
        <Route
          key="products"
          path="/gas-station-panel"
          exact
          component={GasStationProducts}
        />
        <Route
          key="dashboards"
          path="/gas-station-panel/dashboards"
          exact
          component={GasStationDashboards}
        />
      </Switch>
    </div>
  );
};

export default ContentGas;
