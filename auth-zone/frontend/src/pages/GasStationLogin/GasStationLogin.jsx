import React, { useState } from "react";
import "./GasStationLogin.css";
import logoAP from "../../assets/logoAcheposto.png";
import gasIcon from "../../assets/posto-icon.png";

const GasStation = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const redirectPassword = () => {
    props.history.push("/reset-password");
  };

  const redirectRegister = () => {
    props.history.push("/register-gas-station");
  };

  const redirectPanel = () => {
    props.history.push("/gas-station-panel");
  };

  return (
    <div className="gas-login">
      <div className="gas-icon">
        <img className="logoAP" src={logoAP} alt="logomarca ache posto" />
        <h1>PAINEL DE CONTROLE</h1>
        <img
          className="station-icon"
          src={gasIcon}
          alt="logomarca ache posto"
        />
      </div>
      <div className="gas-login-panel">
        <h1 className="login-title">LOGIN</h1>
        <div className="login-inputs">
          <div className="login-input-group">
            <input
              type="email"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder=" "
            />
            <label htmlFor="login">Login</label>
          </div>
          <div className="login-input-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
            />
            <label htmlFor="password">Senha</label>
          </div>
          <p className="login-anchor left-align" onClick={redirectPassword}>
            Esqueci a senha!
          </p>
          <button className="login-btn" onClick={(e) => redirectPanel()}>
            ENTRAR
          </button>
          <p className="login-anchor" onClick={redirectRegister}>
            Cadastrar-se!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GasStation;
