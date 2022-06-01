import React from "react";

import "./GuruCard.scss";

const GuruCard = (props) => {
  return (
    <div className="guru-card">
      <div className="guru-card__image">
        <img src={props.image} alt="guru" />
      </div>
      <div className="guru-card__info">
        <div className="guru-info guru-card__info__name">
          <span>Nama</span>
          <span>{props.name}</span>
        </div>
        <div className="guru-info guru-card__info__nip">
          <span>NIP</span>
          <span>{props.nip}</span>
        </div>
        <div className="guru-info guru-card__info__subject">
          <span>Pelajaran</span>
          <span>{props.subject}</span>
        </div>
      </div>
    </div>
  );
};

export default GuruCard;
