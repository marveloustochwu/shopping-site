import React from "react";
import "./Cartooncard.css";
import Cartooncard from "./Cartooncard";

const CartoonItems = ({ cartoonData, onCartoonClick }) => {
  console.log(cartoonData);
  return (
    <div className="animeitems-container">
      {cartoonData.map((singleData) => (
        <Cartooncard
          key={singleData.id}
          singleData={singleData}
          onCartoonClick={onCartoonClick}
        />
      ))}
    </div>
  );
};

export default CartoonItems;
