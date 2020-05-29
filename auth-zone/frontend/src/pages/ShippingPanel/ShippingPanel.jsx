import React from "react";

import MenuShipping from "./template/MenuShipping";
import HeaderShipping from "./template/HeaderShipping";
import ContentShipping from "./template/ContentShipping";
import Routes from "../../routes";

import "./ShippingPanel.css";

const ShippingPanel = (props) => {
  return (
    <div className="shipping-panel">
      <HeaderShipping />
      <MenuShipping />
      <ContentShipping>
        <Routes />
      </ContentShipping>
    </div>
  );
};

export default ShippingPanel;
