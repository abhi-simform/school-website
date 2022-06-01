import React from "react";

import { ArrowRightOutlined } from "@ant-design/icons";

import "./NewsCard.scss";

const NewsCard = (props) => {
  return (
    <div className="news-card">
      <div className="news-card__image">
        <img src={props.image} alt="news" />
      </div>
      <div className="news-card__content">
        <h3 className="news-card__title">{props.title}</h3>
        <p className="news-card__description">{props.description}</p>
        <p className="news-card__date">{props.date}</p>
        <ArrowRightOutlined></ArrowRightOutlined>
      </div>
    </div>
  );
};

export default NewsCard;
