import React from "react";
import "./EvaluationCard.css";

import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";

const EvaluationCard = (props) => {
  const printProps = () => {
    console.log({ ...props });
  };

  const stars = [];
  const countStars = () => {
    for (let i = 0; i < props.client.evaluation; i++) {
      stars.push(<FaStar className="evaluation-star" />);
    }
  };

  return (
    <div className="evaluation-card" onClick={printProps}>
      <div className="evaluation-pic">
        <div className="border-pic">
          <img src={props.client.picture} alt="" />
        </div>
      </div>
      <div className="evaluation-content">
        <div className="evaluation-name">{props.client.name}</div>
        <div className="evaluation-stars">
          <IconContext.Provider value={{ style: { fontSize: "20px" } }}>
            {countStars()}
            {stars.map((star) => star)}
          </IconContext.Provider>
        </div>
        <div className="evaluation-text">{props.client.comment}</div>
      </div>
    </div>
  );
};

export default EvaluationCard;
