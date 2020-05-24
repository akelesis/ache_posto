import React from 'react';
//import { Link } from 'react-router-dom'
import './styles.css'

import road from '../../assets/road.jpg'

// import { Container } from './styles';

export default function Header() {
  return (
    <div className="Header">
      <img src={road} alt="road" id="road"/>
      <div id="navbar">
        <div className="options">
          <a href="/">Quem Somos</a>
          <a href="/station">Para Postos</a>
          <a href="/company">Para Transportadoras</a>
          <a href="/contact">Fale Conosco</a>
        </div>
      </div>
    </div>
  );
}
