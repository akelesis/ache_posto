import React from "react";
import { connect } from "react-redux";

import { changeFlagOptions } from "../../store/actions/flagOptions";
import { changeCreateProduct } from "../../store/actions/flagCreateProduct";
import { selectProduct } from "../../store/actions/product";

import ProductsEditModal from "../ProductsEditModal/ProductsEditModal";

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

  const registerProduct = () => {
    props.selectProductDispatch({});
    props.FlagCreateProductDispatch(true);
  };

  return (
    <div className="gas-station-products">
      <h1>Dependencias e Produtos</h1>
      <hr />
      <div className="gs-products-container">
        {props.products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            icon={icons[product.icon]}
            segment={product.icon}
            productName={product.productName}
            productPrice={product.productPrice}
          />
        ))}
      </div>
      {props.flagOptions ? <ProductsEditModal mode="edit" /> : ""}
      {props.createProduct ? <ProductsEditModal mode="create" /> : ""}
      <div className="product-register" onClick={registerProduct}>
        CADASTRAR NOVO PRODUTO
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    flagOptions: state.options.flagOptions,
    createProduct: state.createProduct.flagCreateProduct,
    products: state.products.products,
    product: state.product,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    // Flag that toggles Edit Modal
    FlagOptionsDispatch(newBool) {
      const action = changeFlagOptions(newBool);
      dispatch(action);
    },
    FlagCreateProductDispatch(newBool) {
      const action = changeCreateProduct(newBool);
      dispatch(action);
    },
    selectProductDispatch(product) {
      const action = selectProduct(product);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(GasStationProducts);
