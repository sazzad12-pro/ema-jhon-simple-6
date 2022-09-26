import React from "react";
import "./Order.css";

const Order = ({ card }) => {
  const { id, name } = card;
  return (
    <div className="order-container">
      <p>{name}</p>
    </div>
  );
};

export default Order;
