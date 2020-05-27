import React from "react";
import { connect } from "react-redux";

import { changeFlagOptions } from "../../store/actions/flagOptions";

import "./GasStationProducts.css";

import {
  FaGasPump,
  FaHotel,
  FaShower,
  FaStore,
  FaToilet,
  FaWrench,
} from "react-icons/fa";
import { MdLocalCarWash } from "react-icons/md";

import ProductCard from "../ProductCard/ProductCard";

const GasStationProducts = (props) => {
  const icons = [
    <FaGasPump className="product-icon" />,
    <FaHotel className="product-icon" />,
    <MdLocalCarWash className="product-icon" />,
    <FaShower className="product-icon" />,
    <FaStore className="product-icon" />,
    <FaToilet className="product-icon" />,
    <FaWrench className="product-icon" />,
  ];
  const products = [
    {
      id: 1,
      icon: icons[4],
      productName: "Farmacia",
    },
    { id: 2, icon: icons[0], productName: "Gasolina", productPrice: "4,20" },
    { id: 3, icon: icons[0], productName: "Etanol", productPrice: "3,80" },
    {
      id: 4,
      icon: icons[1],
      productName: "Pousada",
    },
  ];

  return (
    <div className="gas-station-products">
      <h1>Dependencias e Produtos</h1>
      <hr />
      <div className="gs-products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            icon={product.icon}
            productName={product.productName}
            productPrice={product.productPrice}
          />
        ))}
      </div>
      <div className="product-register">CADASTRAR NOVO PRODUTO</div>
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
      console.log("Chegou aqui GSP");
      const action = changeFlagOptions(newBool);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(GasStationProducts);