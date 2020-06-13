import React, { useState } from "react";
import { connect } from "react-redux";
import { selectPromotion } from "../../store/actions/promotion";

import "./PromoRegister.css";
import PromoCard from "../PromoCard/PromoCard";
import PromoModal from "../PromoModal/PromoModal";

const PromoRegister = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("edit");

  const openModal = (modalMode) => {
    setMode(modalMode);
    if (modalMode === "create") {
      props.selectPromotionDispatch({});
    }
    setModalOpen(true);
  };

  return (
    <div className="promo-register">
      <h1>Promoções Ativas</h1>
      <hr />
      <div className="promo-container">
        {props.promotions.map((promo) => (
          <PromoCard promo={promo} key={promo.id} onModalOpen={openModal} />
        ))}
      </div>
      <div
        className="promo-register-button"
        onClick={(e) => openModal("create")}
      >
        CADASTRAR NOVA PROMOÇÃO
      </div>
      {modalOpen ? (
        <PromoModal
          mode={mode}
          modalOpen={modalOpen}
          onModalClose={setModalOpen}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    promotions: state.promotions,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    selectPromotionDispatch(promotion) {
      const action = selectPromotion(promotion);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(PromoRegister);
