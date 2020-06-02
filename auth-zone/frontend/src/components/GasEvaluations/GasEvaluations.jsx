import React from "react";
import "./GasEvaluations.css";

import EvaluationCard from "../EvaluationCard/EvaluationCard";

const GasEvaluations = (props) => {
  const clients = [
    {
      id: 1,
      name: "Ricardo da Silva",
      evaluation: 5,
      picture:
        "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
      comment:
        "O posto é muito bom. Bem localizado e tem um bom preço, só peca um pouco no atendimento",
    },
    {
      id: 2,
      name: "José Carlos Mendonça",
      evaluation: 3,
      picture:
        "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
      comment:
        "O posto é muito bom. Bem localizado e tem um bom preço, só peca um pouco no atendimento",
    },
    {
      id: 3,
      name: "Luis Felipe Santos",
      evaluation: 4,
      picture:
        "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
      comment:
        "O posto é muito bom. Bem localizado e tem um bom preço, só peca um pouco no atendimento",
    },
  ];

  return (
    <div className="gas-evaluations">
      <h1>Lista de Opiniões</h1>
      <hr />
      <div className="evaluations-container">
        {clients.map((client) => (
          <EvaluationCard client={client} key={client.id} />
        ))}
      </div>
    </div>
  );
};

export default GasEvaluations;
