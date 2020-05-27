import React from "react";
import { Route } from "react-router-dom";

import "./ContentShipping.css";
import ShippingDashboard from "../ShippingDashboard/ShippingDashboard";

const ContentShipping = (props) => {
  return (
    <div className="content-shipping">
      <Route
        path="/shipping-panel/shipping-dashboard"
        render={(props) => <ShippingDashboard {...props} />}
      />
    </div>
  );
};

export default ContentShipping;
