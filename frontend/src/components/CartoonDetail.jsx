import React from "react";
import "./CartoonDetail.css";

const CartoonDetail = ({ selectedCartoonData }) => {
  console.log(selectedCartoonData);

  return (
    <div className="details-container">
      Cartoon Detail Page
      {selectedCartoonData ? (
        <div className="details">
          <img src={selectedCartoonData.image} alt={selectedCartoonData.name} />
          <div className="my_data">
            {selectedCartoonData.name}{" "}
            <h3>
              <h2>$</h2>
              {selectedCartoonData.price}
            </h3>
            <h4 className="description">{selectedCartoonData.description}</h4>
          </div>
        </div>
      ) : (
        <p>
          {" "}
          Marvelous there is no cartoon selected pls slect a card meow meow
          nigga
        </p>
      )}
    </div>
  );
};

export default CartoonDetail;
