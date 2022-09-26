import React from "react";
import "./show.css";

const Show = ({ user, handleAddCard }) => {
  const { category, id, name, img, price, quantity, ratings, seller, stock } =
    user;

  return (
    <div>
      <div className="card">
        <img src={img ? img : "no img found"} alt="" />
        <div className="card-body">
          <h5 className="card-title">{category}</h5>
          <p className="card-text">Name:{name}</p>
          <p className="card-text">Quantity:{quantity}</p>
          {<p className="card-text">Ratings:{ratings}</p>}
          {<p className="card-text">Seller:{seller}</p>}
          <button onClick={() => handleAddCard(user)}>Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default Show;
