import React from "react";

import { Button } from "antd";

import "./HeroHome.scss";

const HeroHome = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <p className="hero__tag">Motto</p>
        <h1 className="hero__title" style={{ marginBottom: 48 }}>
          SMP N 1 Cibadak (Cerdas Beretika) Ceria, Empati, Rasional, Damai, Aktif, Sabar, Bersih, Elok, Tulus, Iman, Konsiste, Amanah.
        </h1>
        <Button type="primary">Contact us</Button>
      </div>
    </section>
  );
};

export default HeroHome;
