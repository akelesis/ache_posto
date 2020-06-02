import React from "react";
import { IconContext } from "react-icons";
import { FaDollarSign } from "react-icons/fa";

import "./PromoRegister.css";

const PromoRegister = (props) => {
  return (
    <div className="promo-register">
      <h1>Promoções Ativas</h1>
      <hr />
      <div className="promo-container">
        <div className="promo-card">
          <div className="promo-icon-box">
            <IconContext.Provider value={{ style: { fontSize: "80px" } }}>
              <FaDollarSign />
            </IconContext.Provider>
          </div>
          <div className="promo-content-box">
            <h3>Produto: Gasolina Comum</h3>
            <h3>Valor: R$ 4,25</h3>
            <h3>Produto: Gasolina Comum</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoRegister;
