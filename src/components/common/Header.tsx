import React, { useState } from "react";
import CustomLink from "./CustomLink";
import { Link } from "react-router-dom";
import LogoMain from "../../assets/images/main-logo.png";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const reloadHome = () => {
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className="header-left">
            <img src={LogoMain} alt="Logo" className="header-logo" onClick={reloadHome}/>
          </div>
          <div className={`header-right ${toggleMenu ? "active" : ""}`}>
            <div className="menu">
              <ul className="menu-list">
                <li className="menu-item" onClick={handleToggleMenu}>
                  <CustomLink to="/" label="Home" activeOnlyWhenExact={true} />
                </li>
                <li className="menu-item" onClick={handleToggleMenu}>
                  <CustomLink to="/about" label="About" />
                </li>
                <li className="menu-item" onClick={handleToggleMenu}>
                  <CustomLink to="/service" label="Service" />
                </li>
                <li className="menu-item" onClick={handleToggleMenu}>
                  <CustomLink to="/gallery" label="Gallery" />
                </li>
                <li className="menu-item" onClick={handleToggleMenu}>
                  <CustomLink to="/blog" label="Blog" />
                </li>
              </ul>
            </div>
            <Link to="/contact" onClick={handleToggleMenu}>
              <div className="button button--primary button--rounded">
                Contact
              </div>
            </Link>
          </div>
          <div
            className={`header-toggle ${toggleMenu ? "is-active" : ""}`}
            id="mobile-menu"
            onClick={handleToggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
