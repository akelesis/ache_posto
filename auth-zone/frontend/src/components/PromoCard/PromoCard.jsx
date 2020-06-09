import React from "react";
import { IconContext } from "react-icons";
import { FaDollarSign } from "react-icons/fa";
import { connect } from "react-redux";
import { selectPromotion } from "../../store/actions/promotion";

import "./PromoCard.css";

const PromoCard = (props) => {
  const openModalEdit = () => {
    props.selectPromotionDispatch(props.promo);
    props.onModalOpen("edit");
  };

  return (
    <div className="promo-card" onClick={openModalEdit}>
      <div className="promo-icon-box">
        <IconContext.Provider value={{ style: { fontSize: "80px" } }}>
          <FaDollarSign className="promo-icon" />
        </IconContext.Provider>
      </div>
      <div className="promo-content-box">
        {props.promo.productName ? (
          <>
            <h3>Dependencia: {props.promo.product}</h3>
            <h3>Produto: {props.promo.productName}</h3>
          </>
        ) : (
          <h3>Produto: {props.promo.product}</h3>
        )}
        <h3>Valor: R$ {props.promo.price}</h3>
        <h3>Periodo: {props.promo.period}</h3>
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

export default connect(null, mapDispatchToProp)(PromoCard);
