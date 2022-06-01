import React from "react";

import { Row, Col } from "antd";
import { Button } from "antd";

import vid from "../../../Assets/Video/video.mp4";

import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="container about-conatiner">
        <Row align="middle" justify="center">
          <Col lg={{ span: 10 }} className="video__wrapper">
            <video controls className="about__video" style={{ borderRadius: 5 }}>
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col className="about__content" lg={{ span: 12, offset: 1 }}>
            <h2 className="about__title">Sambutan Kepala Sekolah SMP Negeri 1 Cibadak</h2>
            <p className="about__desciption">
              Puji dan syukur mari kita panjatkan kehadirat Allah SWT. Yang senantiasa dengan sifat kasih dan sayangnya banyak memberikan nikmat ...
            </p>
            <Button type="primary" style={{ paddingInline: 45 }}>
              Lebih Lanjut
            </Button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutSection;
