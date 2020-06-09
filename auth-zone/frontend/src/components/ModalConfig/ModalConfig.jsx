import React, { useState } from "react";
import { connect } from "react-redux";
import { changeProfile } from "../../store/actions/profile";

import { IconContext } from "react-icons";
import { FiCamera } from "react-icons/fi";

import "./ModalConfig.css";

const ModalConfig = (props) => {
  const [profilePicture, setProfilePicture] = useState(props.profile.picture);
  const [profileName, setProfileName] = useState(props.profile.name);
  const [profileEmail, setProfileEmail] = useState(props.profile.email);
  const [profilePhone, setProfilePhone] = useState(props.profile.phone);

  const updateProfile = () => {
    const fullProfile = {};
    fullProfile.name = profileName;
    fullProfile.email = profileEmail;
    fullProfile.phone = profilePhone;

    props.updateProfileDispatch(fullProfile);
    props.modalOpen(false);
  };

  return (
    <div className="modal-config">
      <div className="modal-config-content">
        <h3>Editar informações</h3>
        <div className="profile-pic-box">
          <input
            type="file"
            name="profile-pic"
            accept=".jpg, .png"
            id="profile-pic"
            style={{ display: "none" }}
          />

          <div className="profile-pic">
            <img src={profilePicture} alt="" />
            <label htmlFor="profile-pic">
              <div className="icon-edit">
                <IconContext.Provider
                  value={{ style: { fontSize: "20px", color: "#fff" } }}
                >
                  <FiCamera />
                </IconContext.Provider>
              </div>
            </label>
          </div>
        </div>
        <div className="input-info-box">
          <div className="profile-input-group">
            <input
              type="text"
              name="name"
              id="name"
              value={profileName}
              placeholder=" "
              onChange={(e) => setProfileName(e.target.value)}
            />
            <label htmlFor="name">Nome</label>
          </div>
        </div>
        <div className="input-info-box">
          <div className="profile-input-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              value={profileEmail}
              onChange={(e) => setProfileEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="input-info-box">
          <div className="profile-input-group">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder=" "
              value={profilePhone}
              onChange={(e) => setProfilePhone(e.target.value)}
            />
            <label htmlFor="phone">Telefone</label>
          </div>
        </div>
        <div className="btn-box">
          <button className="profile-btn agree" onClick={updateProfile}>
            Salvar
          </button>
          <button
            className="profile-btn disagree"
            onClick={(e) => props.modalOpen(false)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfileDispatch(newInfo) {
      const action = changeProfile(newInfo);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfig);
