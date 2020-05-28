import React, { useRef, useState } from "react";
import { connect } from "react-redux";

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

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

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
          <select name="segmento" id="">
            <option value="">Escolha o segmento</option>
            <option value="0">Combustível</option>
            <option value="1">Hotelaria</option>
            <option value="2">Lavajato</option>
            <option value="3">Banheiro</option>
            <option value="4">Comércio</option>
            <option value="5">Lavabo</option>
            <option value="6">Mecânico</option>
          </select>
        </div>
        <div className="button-case">
          {props.mode === "edit" ? (
            <button className="update-modal-button">Atualizar</button>
          ) : (
            <button className="update-modal-button">Salvar</button>
          )}
          {props.mode === "edit" ? (
            <button className="delete-modal-button">Excluir</button>
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
    FlagCreateProductDispatch(newBool) {
      const action = changeCreateProduct(newBool);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(ProductsEditModal);
