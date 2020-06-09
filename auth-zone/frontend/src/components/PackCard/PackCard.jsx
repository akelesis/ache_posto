import React from "react";
import { IconContext } from "react-icons";
import { FaMobileAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { selectPromotion } from "../../store/actions/promotion";

import "./PackCard.css";

const PackCard = (props) => {
  return (
    <div className="pack-card">
      <div className="pack-icon-box">
        <IconContext.Provider value={{ style: { fontSize: "80px" } }}>
          <FaMobileAlt className="pack-icon" />
        </IconContext.Provider>
      </div>
      <div className="pack-content-box">
        <h1>{props.pack.name}</h1>
        <h3>Valor: R$ {props.pack.price}</h3>
        <h3>Descrição: {props.pack.description}</h3>
      </div>
      <div className="pack-button-case">
        <div className="buying-btn" id="paypal-btn"></div>
        <div className="buying-btn" id="picpay-btn"></div>
        <div className="buying-btn" id="pagseguro-btn"></div>
      </div>
    </div>
  );
};

const mapDispatchToProp = (dispatch) => {
  return {
    selectPromotionDispatch(promotion) {
      const action = selectPromotion(promotion);
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProp)(PackCard);
