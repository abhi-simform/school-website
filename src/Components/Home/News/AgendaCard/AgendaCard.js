import React from "react";

import { ArrowRightOutlined } from "@ant-design/icons";

import "./AgendaCard.scss";

const AgendaCard = (props) => {
  return (
    <div className="agenda-card">
      <div className="agenda-card__image">
        <img src={props.image} alt="agenda" />
      </div>
      <div className="agenda-card__content">
        <p className="agenda-card__date">{props.date}</p>
        <h3 className="agenda-card__title">{props.title}</h3>
        <ArrowRightOutlined></ArrowRightOutlined>
      </div>
    </div>
  );
};

export default AgendaCard;
