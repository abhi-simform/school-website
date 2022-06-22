import React from "react";
import { Row, Col } from "antd";
import { FacebookFilled, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";

import logo from "../../../Assets/Images/logo.webp";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Row className="footer__content" justify="space-between" style={{ paddingTop: 65, paddingBottom: 50 }}>
          <Col className="footer__address" flex="auto">
            <img src={logo} alt="logo" />
            <a href="google.com" className="address">
              Jl. Siliwangi No 123, Cibadak, Cibadak, Sukabumi, Jawa Barat 43351, Indonesia, (0266)531333
            </a>
            <a href="google.com" className="mail">
              info@smpn1cibadak.sch.id
            </a>
            <a href="google.com" className="mail">
              smpn1cbd_kabsi@yahoo.co.id
            </a>
          </Col>
          <Col>
            <ul className="footer__list">
              <li>
                <h3 className="footer__list__title">Jelajah</h3>
              </li>
              <li>
                <a href="google.com" className="footer__link">
                  Sambutan
                </a>
              </li>
              <li>
                <a href="google.com" className="footer__link">
                  Profil Sekolah
                </a>
              </li>
              <li>
                <a href="google.com" className="footer__link">
                  Berita
                </a>
              </li>
              <li>
                <a href="google.com" className="footer__link">
                  Galeri
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="footer__list">
              <li>
                <h3 className="footer__list__title">Halaman Umum</h3>
              </li>
              <li>
                <a href="google.com" className="footer__link">
                  Data Guru
                </a>
              </li>
              <li>
                <a href="google.com" className="footer__link">
                  PPDB SMPN 1 Cibadak
                </a>
              </li>
              <li>
                <a href="google.com" className="footer__link">
                  Panduan PPDB
                </a>
              </li>
              <li>
                <a href="google.com" className="footer__link">
                  Lokasi
                </a>
              </li>
              <li>
                <a href="google.com" className="footer__link">
                  Kontak
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h3 className="footer__list__title">Media Sosial</h3>
            <div className="social__link">
              <a href="google.com">
                <TwitterOutlined></TwitterOutlined>
              </a>
              <a href="google.com">
                <FacebookFilled></FacebookFilled>
              </a>
              <a href="google.com">
                <InstagramOutlined></InstagramOutlined>
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="footer__copyright">
          <p>Copyright © SMP Negeri 1 Cibadak. All right Reserved. Hosting By IDCloudHost</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
