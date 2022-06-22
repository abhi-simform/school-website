import React from "react";

import { Row, Col } from "antd";
import { Button } from "antd";

import Profile1 from "../../../Assets/Images/Profile/profile1.webp";
import Profile2 from "../../../Assets/Images/Profile/profile2.webp";
import Profile3 from "../../../Assets/Images/Profile/profile3.webp";
import Profile4 from "../../../Assets/Images/Profile/profile4.webp";

import "./Profile.scss";

const Profile = () => {
  return (
    <section className="profile">
      <div className="container profile-container">
        <Row className="profile-flex">
          <Col span="24" md={{ span: 11 }} className="profile-left">
            <h2 className="profile__title">Profil Sekolah</h2>
            <p className="profile__description">
              Di samping adalah profil sekolah kami secara keseluruhan dari mulai bagian depan hingga seluruh fasilitas yang terdapat disekolah kami
              kami akan ...
            </p>
            <Button type="primary" style={{ paddingBlock: 10, paddingInline: 45 }}>
              Lebih Lanjut
            </Button>
          </Col>
          <Col span="24" md={{ span: 13 }} className="profile-right">
            <div className="profile__card">
              <div className="profile__card-image">
                <img src={Profile1} alt="Profile" />
              </div>
              <div className="profile__card-content">
                <h3 className="profile__card-title">Fasilitas</h3>
                <p className="profile__card-description">Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.</p>
              </div>
            </div>
            <div className="profile__card">
              <div className="profile__card-image">
                <img src={Profile2} alt="Profile" />
              </div>
              <div className="profile__card-content">
                <h3 className="profile__card-title">Lokasi</h3>
                <p className="profile__card-description">Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.</p>
              </div>
            </div>
            <div className="profile__card">
              <div className="profile__card-image">
                <img src={Profile3} alt="Profile" />
              </div>
              <div className="profile__card-content">
                <h3 className="profile__card-title">Sejarah</h3>
                <p className="profile__card-description">Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.</p>
              </div>
            </div>
            <div className="profile__card">
              <div className="profile__card-image">
                <img src={Profile4} alt="Profile" />
              </div>
              <div className="profile__card-content">
                <h3 className="profile__card-title">Prestasi</h3>
                <p className="profile__card-description">Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Profile;
