import React from "react";

import "./PackBuying.css";
import PackCard from "../PackCard/PackCard";

const PackBuying = (props) => {
  const packs = [
    {
      id: 1,
      name: "Pacote de Promoções Standard",
      price: "30,00",
      description: "Te dá direito a cadastrar 3 promoções no app",
    },
    {
      id: 2,
      name: "Pacote de Promoções Plus",
      price: "50,00",
      description: "Te dá direito a cadastrar 6 promoções no app",
    },
    {
      id: 3,
      name: "Pacote de Promoções Premium",
      price: "100,00",
      description: "Te dá direito a cadastrar 15 promoções no app",
    },
  ];

  return (
    <div className="pack-buying">
      <h1>Pacotes de Serviço</h1>
      <hr />
      <div className="pack-container">
        {packs.map((pack) => (
          <PackCard pack={pack} key={pack.id} />
        ))}
      </div>
    </div>
  );
};

export default PackBuying;
