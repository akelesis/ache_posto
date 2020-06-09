import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { FaSignOutAlt, FaCogs } from "react-icons/fa";

import "./MenuGas.css";
import ModalConfig from "../ModalConfig/ModalConfig";

const MenuGas = (props) => {
  const [profileMenu, setProfileMenu] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

  return (
    <div className="menu-gas">
      <div className="main-menu-container">
        <NavLink
          exact
          to="/gas-station-panel"
          className="menu-item-gas"
          activeClassName="active"
        >
          Dependencias e Produtos
        </NavLink>
        <NavLink
          exact
          to="/gas-station-panel/dashboards"
          className="menu-item-gas"
          activeClassName="active"
        >
          Dashboards
        </NavLink>
        <NavLink
          exact
          to="/gas-station-panel/evaluations"
          className="menu-item-gas"
          activeClassName="active"
        >
          Lista de Opiniões
        </NavLink>
        <NavLink
          exact
          to="/gas-station-panel/promotions"
          className="menu-item-gas"
          activeClassName="active"
        >
          Cadastrar Promoções
        </NavLink>
        <NavLink
          exact
          to="/gas-station-panel/buy-packages"
          className="menu-item-gas"
          activeClassName="active"
        >
          Compras de Pacotes
        </NavLink>
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
