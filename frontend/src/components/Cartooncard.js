import React from "react";
import data from "../Data";
import "./Cartooncard.css";
import { Link } from "react-router-dom";
const Cartooncard = ({ singleData, onCartoonClick }) => {
  console.log(singleData);
  return (
    <div
      className="card-container"
      onClick={() => onCartoonClick(singleData.id)}
    >
      <div className="card">
        <figure className="card-wrapper">
          <img src={singleData.url} alt={singleData.name} />
        </figure>
        <figurecaption className="figurecaption">
          <h3>{singleData.name}</h3>
          <h4>${singleData.price}</h4>
          <p>{singleData.description.substring(0, 20)}</p>
          <Link to="/myitems">
            <button>Learn more</button>
          </Link>
        </figurecaption>
        <Link to={"/video"}> Watch our video</Link>
      </div>
    </div>
  );
};

export default Cartooncard;
