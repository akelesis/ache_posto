import React from "react";
import "./Footer.css";
import logoMVtech from "../../assets/logoMVtech.png";
// import { Container } from './styles';

export default function Footer() {
  return (
    <div className="Footer">
      <span>
        Ache posto &copy; 2020 by
        <img src={logoMVtech} alt="logoMVtech" id="logoMVtech" /> - Todos os
        direitos reservados
      </span>
    </div>
  );
}
