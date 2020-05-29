import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Choice from "./pages/Choice/Choice";
import GasStationLogin from "./pages/GasStationLogin/GasStationLogin";
import ShippingLogin from "./pages/ShippingLogin/ShippingLogin";
import GasStationPanel from "./pages/GasStationPanel/GasStationPanel";
import ShippingPanel from "./pages/ShippingPanel/ShippingPanel";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Choice} />
        <Route path="/gas-station" exact component={GasStationLogin} />
        <Route path="/shipping" exact component={ShippingLogin} />
        <Route path="/gas-station-panel" component={GasStationPanel} />
        <Route path="/shipping-panel" exact component={ShippingPanel} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
