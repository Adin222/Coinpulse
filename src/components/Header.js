import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
export const Header = () => {
  const [isMenuOpen, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!isMenuOpen);
  };

  return (
    <header>
      <h1 className="site-name">
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          CoinPulse
        </Link>
      </h1>
      <nav>
        <div
          className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className={`dropDownMenu ${isMenuOpen ? "active" : ""}`}>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link style={{ color: "white" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={{ color: "white" }} to="/contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
