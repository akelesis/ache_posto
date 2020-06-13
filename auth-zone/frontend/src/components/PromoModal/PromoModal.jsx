import React, { useRef, useState } from "react";
import { connect } from "react-redux";

import {
  addPromotion,
  updatePromotion,
  removePromotion,
} from "../../store/actions/promotions";

import "./PromoModal.css";

const PromoModal = (props) => {
  const handlerSwitch = useRef();
  const productInput = useRef();
  const promoProductNameLabel = useRef();
  const productInputContainer = useRef();

  const PRODUCT = false;
  const DEPENDENCY = true;

  const [switchPromoType, setSwitchPromoType] = useState(PRODUCT);
  const [promoProduct, setPromoProduct] = useState(props.promotion.product);
  const [promoProductName, setPromoProductName] = useState(
    props.promotion.productName
  );
  const [promoProductPrice, setPromoProductPrice] = useState(
    props.promotion.price
  );
  const [promoProductDescription, setPromoProductDescription] = useState(
    props.promotion.productDescription
  );
  const [promoProductDuration, setPromoProductDuration] = useState(0);

  const togglePromoType = () => {
    if (switchPromoType === PRODUCT) {
      setSwitchPromoType(DEPENDENCY);
      handlerSwitch.current.style.backgroundColor = "#62A9CC";
      handlerSwitch.current.style.marginLeft = "20px";
    } else {
      productInput.current.style.animationName = "closeInput";
      promoProductNameLabel.current.style.display = "none";
      setTimeout(() => setSwitchPromoType(PRODUCT), 200);
      handlerSwitch.current.style.backgroundColor = "#858585";
      handlerSwitch.current.style.marginLeft = "0";
      productInputContainer.current.style.animationName = "closeInput";
    }
  };

  const updatePromo = () => {
    let promoArray = props.promotions;

    for (let i = 0; i < promoArray.length; i++) {
      if (promoArray[i].id === props.promotion.id) {
        promoArray[i].product = promoProduct;
        promoArray[i].productName = promoProductName;
        promoArray[i].price = promoProductPrice;
        promoArray[i].productDescription = promoProductDescription;
      }
    }
    /* props.updatePromotionDispatch(promoArray); */
    props.onModalClose(false);
  };

  const addPromo = () => {
    let newPromo = {};
    let promoArray = props.promotions;

    newPromo.id = props.promotions.length + 1;
    newPromo.product = promoProduct;
    newPromo.productName = promoProductName;
    newPromo.price = promoProductPrice;
    newPromo.productDescription = promoProductDescription;

    promoArray.push(newPromo);
    /* props.updatePromotionDispatch(promoArray); */
    props.onModalClose(false);
  };

  const removePromo = () => {
    let promoArray = props.promotions;

    for (let i = 0; i < promoArray.length; i++) {
      if (promoArray[i].id === props.promotion.id) {
        promoArray.splice(i, 1);
      }
    }
    /* props.updatePromotionDispatch(promoArray); */
    props.onModalClose(false);
  };

  return (
    <div className="promo-modal">
      <div className="promo-modal-content">
        <h3>Promoção</h3>
        <select
          name="product"
          id="product"
          value={promoProduct}
          onChange={(e) => setPromoProduct(e.target.value)}
        >
          <option value={undefined}>Selecione o produto/dependencia</option>
          {props.products.products.map((product) => (
            <option value={product.productName} key={product.id}>
              {product.productName}
            </option>
          ))}
        </select>
        <div className="promo-type">
          <small>Promoção em dependência do posto?</small>
          <div className="switch" onClick={togglePromoType}>
            <div className="switch-handler" ref={handlerSwitch}></div>
          </div>
        </div>
        {switchPromoType ? (
          <div className="promo-input-group" ref={productInputContainer}>
            <input
              type="text"
              name="promo-product-name"
              id="promo-product-name"
              placeholder=" "
              value={promoProductName}
              onChange={(e) => setPromoProductName(e.target.value)}
              ref={productInput}
            />
            <label htmlFor="promo-product-name" ref={promoProductNameLabel}>
              Nome do Produto
            </label>
          </div>
        ) : (
          ""
        )}
        <div className="promo-input-group">
          <input
            type="text"
            name="promo-product-price"
            id="promo-product-price"
            placeholder=" "
            value={promoProductPrice}
            onChange={(e) => setPromoProductPrice(e.target.value)}
          />
          <label htmlFor="promo-product-price">Preço</label>
        </div>
        <div className="promo-input-group">
          <input
            type="number"
            name="promo-product-Duration"
            id="promo-product-Duration"
            placeholder=" "
            value={promoProductDuration}
            onChange={(e) => setPromoProductDuration(e.target.value)}
          />
          <label htmlFor="promo-product-price">Duração em horas</label>
        </div>
        <div className="promo-input-group">
          <input
            type="text"
            name="promo-product-descript"
            id="promo-product-descript"
            placeholder=" "
            onChange={(e) => setPromoProductDescription(e.target.value)}
            value={promoProductDescription}
          />
          <label htmlFor="promo-product-descript">Descrição</label>
        </div>
        <div className="button-case">
          {props.mode === "edit" ? (
            <button className="update-modal-button" onClick={updatePromo}>
              Atualizar
            </button>
          ) : (
            <button className="update-modal-button" onClick={addPromo}>
              Salvar
            </button>
          )}
          {props.mode === "edit" ? (
            <button className="delete-modal-button" onClick={removePromo}>
              Excluir
            </button>
          ) : (
            ""
          )}
          <button
            className="cancel-modal-button"
            onClick={(e) => props.onModalClose(false)}
          >
            Cancelar
          </button>
        </div>
      </div>
      <div className="overlay" onClick={(e) => props.onModalClose(false)}></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    promotion: state.promotion,
    promotions: state.promotions,
    products: state.products,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    addPromotionDispatch(newPromotion) {
      const action = addPromotion(newPromotion);
      dispatch(action);
    },
    updatePromotionDispatch(newArrayPromotion) {
      const action = updatePromotion(newArrayPromotion);
      dispatch(action);
    },
    removePromotionDispatch(newArrayPromotion) {
      const action = removePromotion(newArrayPromotion);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(PromoModal);
