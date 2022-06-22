import AboutSlider from "./AboutSlider/AboutSlider";

import "./AboutHero.scss";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <h1 className="about-title">Profile SMP Negeri 1 Cibadak</h1>
      <AboutSlider></AboutSlider>
    </section>
  );
};

export default AboutHero;
