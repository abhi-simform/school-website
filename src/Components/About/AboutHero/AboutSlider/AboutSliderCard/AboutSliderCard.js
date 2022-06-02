import react from "react";

import "./AboutSliderCard.scss";

const AboutSliderCard = (props) => {
  return (
    <div className="about-slider-card">
      <img src={props.image} alt="slider-card" />
      <p>{props.title}</p>
    </div>
  );
};

export default AboutSliderCard;
