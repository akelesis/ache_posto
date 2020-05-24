import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Choice from "./pages/Choice/Choice";
import GasStationLogin from "./pages/GasStationLogin/GasStationLogin";
import ShippingLogin from "./pages/ShippingLogin/ShippingLogin";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Choice} />
        <Route path="/gas-station" exact component={GasStationLogin} />
        <Route path="/shipping" exact component={ShippingLogin} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
