import React from "react";
import { IconContext } from "react-icons";
import { connect } from "react-redux";
import { changeFlagOptions } from "../../store/actions/flagOptions";
import { changeX, changeY } from "../../store/actions/coordinates";

import "./ProductCard.css";

const ProductCard = (props) => {
  const prepareOptions = (event) => {
    console.log("Entrou aqui!");
    const x = event.clientX;
    const y = event.clientY;
    props.FlagOptionsDispatch(true);
    props.ChangeXDispatch(x);
    props.ChangeYDispatch(y);
    setTimeout(console.log(props.coordinates.x, props.coordinates.y), 1200);
  };

  return (
    <div className="product-card" onClick={(e) => prepareOptions(e)}>
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
    ChangeXDispatch(newNumber) {
      const action = changeX(newNumber);
      dispatch(action);
    },
    ChangeYDispatch(newNumber) {
      const action = changeY(newNumber);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(ProductCard);
