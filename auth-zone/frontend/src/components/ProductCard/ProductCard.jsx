import React from "react";
import { IconContext } from "react-icons";
import { connect } from "react-redux";
import { changeFlagOptions } from "../../store/actions/flagOptions";

import "./ProductCard.css";

const ProductCard = (props) => {
  const prepareOptions = () => {
    props.FlagOptionsDispatch(true);
  };

  return (
    <div className="product-card" onClick={prepareOptions}>
      <div className="icon-container">
        <IconContext.Provider value={{ style: { fontSize: "88px" } }}>
          {props.icon}
        </IconContext.Provider>
      </div>
      <div className="description-container">
        <h3 className="product-name">{props.productName}</h3>
        <h3 className="product-price">
          {props.productPrice ? "Preço: " + props.productPrice : ""}
        </h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    flagOptions: state.options.flagOptions,
    coordinates: state.coordinates,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    // Flag that toggles Edit Modal
    FlagOptionsDispatch(newBool) {
      const action = changeFlagOptions(newBool);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(ProductCard);
