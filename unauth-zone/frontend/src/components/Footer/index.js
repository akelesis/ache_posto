import React from 'react';
import './styles.css'
import logoMVtech from '../../assets/logoMVtech.png'
// import { Container } from './styles';

export default function Footer() {
  return (
    <div className="Footer">
      <span>Ache posto © 2020 <img src={logoMVtech} alt="logoMVtech" id="logoMVtech"/> - Todos os direitos reservados</span>
    </div>
  );
}
