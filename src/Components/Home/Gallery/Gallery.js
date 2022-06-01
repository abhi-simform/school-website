import React from "react";

import { Row, Col } from "antd";
import { Button } from "antd";

import Gallery1 from "../../../Assets/Images/Gallery/gallery1.jpg";
import Gallery2 from "../../../Assets/Images/Gallery/gallery2.jpg";
import Gallery3 from "../../../Assets/Images/Gallery/gallery3.jpg";
import Gallery4 from "../../../Assets/Images/Gallery/gallery4.jpg";
import Gallery5 from "../../../Assets/Images/Gallery/gallery5.jpg";
import Gallery6 from "../../../Assets/Images/Gallery/gallery6.jpg";

import "./Gallery.scss";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container gallery-container">
        <h2 className="gallery__title">Gallery</h2>
        {/* <div className="gallery__images">
          <img src={Gallery1} alt="" className="gallery__image" />
          <img src={Gallery2} alt="" className="gallery__image" />
          <img src={Gallery3} alt="" className="gallery__image" />
          <img src={Gallery4} alt="" className="gallery__image" />
          <img src={Gallery5} alt="" className="gallery__image" />
          <img src={Gallery6} alt="" className="gallery__image" />
        </div> */}
        <Row justify="center" className="gallery__images">
          <Col md={{ span: 12 }} lg={{ span: 8 }}>
            <img src={Gallery1} alt="" className="gallery__image" />
          </Col>
          <Col md={{ span: 12 }} lg={{ span: 8 }}>
            <img src={Gallery2} alt="" className="gallery__image" />
          </Col>
          <Col md={{ span: 12 }} lg={{ span: 8 }}>
            <img src={Gallery3} alt="" className="gallery__image" />
          </Col>
          <Col md={{ span: 12 }} lg={{ span: 8 }}>
            <img src={Gallery4} alt="" className="gallery__image" />
          </Col>
          <Col md={{ span: 12 }} lg={{ span: 8 }}>
            <img src={Gallery5} alt="" className="gallery__image" />
          </Col>
          <Col md={{ span: 12 }} lg={{ span: 8 }}>
            <img src={Gallery6} alt="" className="gallery__image" />
          </Col>
        </Row>
        <Button type="primary" style={{ paddingInline: 45, paddingBlock: 10 }}>
          Lebih Lanjut
        </Button>
      </div>
    </section>
  );
};

export default Gallery;
