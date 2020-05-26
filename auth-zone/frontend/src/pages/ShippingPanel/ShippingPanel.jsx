import React from "react";

import "./ShippingPanel.css";
import HeaderShipping from "./template/HeaderShipping";
import MenuShipping from "./template/MenuShipping";
import ContentShipping from "./template/ContentShipping";

const ShippingPanel = (props) => {
  return (
    <div className="shipping-panel">
      <HeaderShipping />
      <MenuShipping />
      <ContentShipping />
    </div>
  );
};

export default ShippingPanel;
