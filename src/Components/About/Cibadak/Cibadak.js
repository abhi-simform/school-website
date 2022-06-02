import react from "react";

import { Row, Col } from "antd";

import addressImage from "../../../Assets/Images/Cibadak/address.png";
import chartImage from "../../../Assets/Images/Cibadak/chart.png";
import listImage from "../../../Assets/Images/Cibadak/list.png";
import locationImage from "../../../Assets/Images/Cibadak/location.png";
import siteImage from "../../../Assets/Images/Cibadak/site.png";

import "./Cibadak.scss";

const Cibadak = () => {
  return (
    <section className="cibadak">
      <h2>SMP Negeri 1 Cibadak</h2>
      <Row className="cibadak-container">
        <Col span="24" lg={{ span: 9 }} className="cibadak-left">
          <div className="cibadak-left-cards">
            <div className="cibadak__card cibadak__card--left">
              <div className="card__image">
                <img src={addressImage} alt="address" />
              </div>
              <div className="card__content">
                <h4>Nama Sekolah</h4>
                <p>SMP Negeri 1 Cibadak </p>
                <h4>Nama Kepala Sekolah</h4>
                <p>Drs Ossad</p>
              </div>
            </div>
            <div className="cibadak__card cibadak__card--left">
              <div className="card__image">
                <img src={locationImage} alt="location" />
              </div>
              <div className="card__content">
                <h4>Alamat</h4>
                <p>Jl. Siliwangi No. 123 Cibadak</p>
                <p>Sukabumi - Jawa barat</p>
                <p>43351</p>
              </div>
            </div>
            <div className="cibadak__card cibadak__card--left">
              <div className="card__image">
                <img src={siteImage} alt="address" />
              </div>
              <div className="card__content">
                <h4>Website / Email</h4>
                <p>smpn1cibadak.sch.id /</p>
                <p>smpn1cbd_kabsi@yahoo.com</p>
                <h4>No. Telp</h4>
                <p>(0266) 531333</p>
              </div>
            </div>
          </div>
        </Col>
        <Col span="24" lg={{ span: 15 }} className="cibadak-right">
          <Row className="cibadak-right-cards">
            <Col span="24" md={{ span: 12 }}>
              <div className="cibadak__card cibadak__card--right">
                <div className="card__image">
                  <img src={addressImage} alt="address" />
                </div>
                <div className="card__content">
                  <h4>No. Pendirian Sekolah</h4>
                  <p>-</p>
                  <h4>No. Sertifikat</h4>
                  <p>421 / 997 / 2005</p>
                </div>
              </div>
            </Col>
            <Col span="24" md={{ span: 12 }}>
              <div className="cibadak__card cibadak__card--right">
                <div className="card__image">
                  <img src={chartImage} alt="address" />
                </div>
                <div className="card__content">
                  <h4>No. Statistik Sekolah</h4>
                  <p>20 1 02 06 10 008</p>
                  <h4>NIS</h4>
                  <p>200080</p>
                </div>
              </div>
            </Col>
            <Col span="24" md={{ span: 12 }}>
              <div className="cibadak__card cibadak__card--right">
                <div className="card__image">
                  <img src={listImage} alt="address" />
                </div>
                <div className="card__content">
                  <h4>Jenjang Akredtasi</h4>
                  <p>A</p>
                  <h4>Tahun Didirikan</h4>
                  <p>1965</p>
                  <h4>Tahun Operasional</h4>
                  <p>1966</p>
                </div>
              </div>
            </Col>
            <Col span="24" md={{ span: 12 }}>
              <div className="cibadak__card cibadak__card--right">
                <div className="card__image">
                  <img src={siteImage} alt="address" />
                </div>
                <div className="card__content">
                  <h4>Status Kepemilikan Tanah</h4>
                  <p>Hak Milik</p>
                  <h4>Luas Tanah</h4>
                  <p>5.007 M2</p>
                  <h4>Status Kepemilikan Bangunan</h4>
                  <p>Pemerintah</p>
                </div>
              </div>
            </Col>
            <Col span="24" md={{ span: 12 }}>
              <div className="cibadak__card cibadak__card--right">
                <div className="card__image">
                  <img src={addressImage} alt="address" />
                </div>
                <div className="card__content">
                  <h4>No. Pendirian Sekolah</h4>
                  <p>-</p>
                  <h4>No. Sertifikat</h4>
                  <p>421 / 997 / 2005</p>
                  <h4>No. Sertifikat</h4>
                  <p>421 / 997 / 2005</p>
                </div>
              </div>
            </Col>
            <Col span="24" md={{ span: 12 }}>
              <div className="cibadak__card cibadak__card--right">
                <div className="card__image">
                  <img src={listImage} alt="address" />
                </div>
                <div className="card__content">
                  <h4>Luas Seluruh Bangunan </h4>
                  <p>2.140 M2</p>
                  <h4>Fasilitas Lainnya</h4>
                  <p>-</p>
                  <h4>Sisi Lahan Seluruhnya</h4>
                  <p>-</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Cibadak;
