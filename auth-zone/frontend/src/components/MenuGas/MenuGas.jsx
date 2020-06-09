import React, { useState } from "react";
import { connect } from "react-redux";

import { FaSignOutAlt, FaCogs } from "react-icons/fa";

import "./MenuGas.css";
import ModalConfig from "../ModalConfig/ModalConfig";

const MenuGas = (props) => {
  const [products, setProduct] = useState("active");
  const [dashboards, setDashboards] = useState("");
  const [evaluations, setEvaluations] = useState("");
  const [registerPromo, setRegisterPromo] = useState("");
  const [packBuying, setPackBuying] = useState("");
  const [profileMenu, setProfileMenu] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

  function redirectProducts() {
    setProduct("active");
    setDashboards("");
    setEvaluations("");
    setRegisterPromo("");
    setPackBuying("");

    props.history.push("/gas-station-panel");
  }

  function redirectDashboards() {
    setProduct("");
    setDashboards("active");
    setEvaluations("");
    setRegisterPromo("");
    setPackBuying("");

    props.history.push("/gas-station-panel/dashboards");
  }

  function redirectEvaluations() {
    setProduct("");
    setDashboards("");
    setEvaluations("active");
    setRegisterPromo("");
    setPackBuying("");

    props.history.push("/gas-station-panel/evaluations");
  }

  function redirectPromo() {
    setProduct("");
    setDashboards("");
    setEvaluations("");
    setRegisterPromo("active");
    setPackBuying("");

    props.history.push("/gas-station-panel/promotions");
  }

  function redirectPackBuying() {
    setProduct("");
    setDashboards("");
    setEvaluations("");
    setRegisterPromo("");
    setPackBuying("active");

    props.history.push("/gas-station-panel/buy-packages");
  }

  return (
    <div className="menu-gas">
      <div className="main-menu-container">
        <div className={"menu-item-gas " + products} onClick={redirectProducts}>
          <p>Dependencias e Produtos</p>
        </div>
        <div
          className={"menu-item-gas " + dashboards}
          onClick={redirectDashboards}
        >
          <p>Dashboards</p>
        </div>
        <div
          className={"menu-item-gas " + evaluations}
          onClick={redirectEvaluations}
        >
          <p>Lista de Opiniões</p>
        </div>
        <div
          className={"menu-item-gas " + registerPromo}
          onClick={redirectPromo}
        >
          <p>Cadastrar Promoções</p>
        </div>
        <div
          className={"menu-item-gas " + packBuying}
          onClick={redirectPackBuying}
        >
          <p>Compras de Pacotes</p>
        </div>
      </div>
      <div className="profile-menu-container">
        <div className="profile-button-container">
          <div
            className="profile-button"
            onClick={(e) => setProfileMenu(!profileMenu)}
          >
            <div className="profile-button-pic">
              <img src={props.profile.picture} alt="" />
            </div>
            <div className="profile-name">{props.profile.name}</div>
          </div>
        </div>
        {profileMenu ? (
          <>
            <div className="profile-menu">
              <ul className="profile-menu-list">
                <li
                  className="profile-menu-item"
                  onClick={(e) => {
                    setProfileModal(true);
                    setProfileMenu(false);
                  }}
                >
                  <FaCogs className="profile-icon" />
                  configurações
                </li>
                <li
                  className="profile-menu-item"
                  onClick={(e) => props.history.push("/gas-station")}
                >
                  <FaSignOutAlt className="profile-icon" />
                  desconectar-se
                </li>
              </ul>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {profileMenu ? (
        <div
          className="profile-menu-overlay"
          onClick={(e) => setProfileMenu(false)}
        ></div>
      ) : (
        ""
      )}
      {profileModal ? <ModalConfig modalOpen={setProfileModal} /> : ""}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

export default connect(mapStateToProps)(MenuGas);
