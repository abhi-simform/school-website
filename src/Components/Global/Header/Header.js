import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { MenuOutlined } from "@ant-design/icons";

import Logo from "../../../Assets/Images/logo.png";

import "./Header.scss";

const Header = () => {
  const [navExpand, setNavExpand] = useState(false);
  const handleClick = () => {
    setNavExpand(!navExpand);
  };
  return (
    <header className="header" id="header">
      <div className="container header-container">
        <div className="logo">
          <a href="#">
            <img src={Logo} alt="" />
          </a>
        </div>
        <nav className="nav" id="nav">
          <ul className={navExpand ? "nav__list nav__list--active" : "nav__list"}>
            <li className="nav__item">
              <Link to="/" className="nav__link nav__link--active">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/guru" className="nav__link">
                Guru
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Siswa
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Pendaftaran
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                lainya
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Kontak
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={handleClick}>
          <MenuOutlined></MenuOutlined>
        </div>
      </div>
    </header>
  );
};

export default Header;
