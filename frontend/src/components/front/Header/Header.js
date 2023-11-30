import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = (Cartooncard) => {
  return (
    <header className="header">
      <div>
        <h1>Marvel Animates</h1>
      </div>
      <div className="Cartooncard">
        <ul>
          <li>
            <Link to="/">
              {" "}
              <div className="card-toons">Cartooncard </div>
            </Link>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <Link to="/contact">
            <div>Contact</div>
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/myitems">
            <div>myitems</div>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
