import React, { useRef, useState } from "react";
import { connect } from "react-redux";

import {
  addProduct,
  updateProduct,
  removeProduct,
} from "../../store/actions/products";

import { selectProduct } from "../../store/actions/product";

import { changeFlagOptions } from "../../store/actions/flagOptions";
import { changeCreateProduct } from "../../store/actions/flagCreateProduct";

import "./ProductsEditModal.css";

const ProductsEditModal = (props) => {
  const prodOptionsModal = useRef();
  const prodOptionsModalContent = useRef();
  const closeModal = () => {
    prodOptionsModalContent.current.style.marginTop = "100px";
    prodOptionsModal.current.style.opacity = "0";
    setTimeout(() => {
      props.FlagOptionsDispatch(false);
      props.FlagCreateProductDispatch(false);
    }, 500);
  };

  const [name, setName] = useState(props.product.productName);
  const [price, setPrice] = useState(props.product.productPrice);
  const [description, setDescription] = useState(
    props.product.productDescription
  );
  const [segment, setSegment] = useState(props.product.icon);

  const addProduct = () => {
    const newProduct = {
      id: props.products.length + 1,
      icon: segment,
      productName: name,
      productPrice: price,
      productDescription: description,
    };
    closeModal();
    props.addProdDispatch(newProduct);
  };

  const updateProduct = () => {
    let productsList = props.products;

    for (let i = 0; i < productsList.length; i++) {
      if (productsList[i].id === props.product.id) {
        productsList[i].icon = segment;
        productsList[i].productName = name;
        productsList[i].productPrice = price;
        productsList[i].productDescription = description;
      }
    }
    props.updateProdDispatch(productsList);
    closeModal();
  };

  const removeProduct = () => {
    let productsList = props.products.filter((product) => {
      return product.id !== props.product.id;
    });

    props.removeProdDispatch(productsList);
    closeModal();
  };

  return (
    <div
      ref={prodOptionsModal}
      className="product-options-modal"
      id="product-options-modal"
    >
      <div
        className="product-options-modal-overlay"
        onClick={(e) => closeModal()}
      ></div>
      <div
        ref={prodOptionsModalContent}
        className="product-options-modal-content"
      >
        <h3>Editar</h3>
        <hr />
        <div className="input-prod-group">
          <input
            type="text"
            id="prod-name"
            value={name}
            placeholder=" "
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="prod-name">*Nome</label>
        </div>
        <div className="input-prod-group">
          <input
            type="text"
            id="prod-preco"
            value={price}
            placeholder=" "
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="prod-preco">Preço</label>
        </div>
        <div className="input-prod-group">
          <input
            type="text"
            id="prod-desc"
            value={description}
            placeholder=" "
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="prod-desc">Descrição</label>
        </div>
        <div className="input-prod-group">
          <select
            name="segment"
            id=""
            value={segment}
            onChange={(e) => setSegment(e.target.value)}
          >
            <option value={undefined}>Escolha o segmento</option>
            <option value={0}>Combustível</option>
            <option value={1}>Hotelaria</option>
            <option value={2}>Lavajato</option>
            <option value={3}>Banheiro</option>
            <option value={4}>Comércio</option>
            <option value={5}>Lavabo</option>
            <option value={6}>Mecânico</option>
          </select>
        </div>
        <div className="button-case">
          {props.mode === "edit" ? (
            <button className="update-modal-button" onClick={updateProduct}>
              Atualizar
            </button>
          ) : (
            <button className="update-modal-button" onClick={addProduct}>
              Salvar
            </button>
          )}
          {props.mode === "edit" ? (
            <button className="delete-modal-button" onClick={removeProduct}>
              Excluir
            </button>
          ) : (
            ""
          )}
          <button className="cancel-modal-button" onClick={(e) => closeModal()}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    flagOptions: state.options.flagOptions,
    products: state.products.products,
    product: state.product,
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
    FlagCreateProductDispatch(newBool) {
      const action = changeCreateProduct(newBool);
      dispatch(action);
    },
    addProdDispatch(newProd) {
      const action = addProduct(newProd);
      dispatch(action);
    },
    updateProdDispatch(newArrayProd) {
      const action = updateProduct(newArrayProd);
      dispatch(action);
    },
    removeProdDispatch(newArrayProd) {
      const action = removeProduct(newArrayProd);
      dispatch(action);
    },
    selectProductDispatch(product) {
      const action = selectProduct(product);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(ProductsEditModal);
