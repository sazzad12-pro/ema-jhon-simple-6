import React, { useEffect, useState } from "react";
import Order from "../Order-summary/Order";
import Show from "../ShowProductUI/Show";

import "./product.css";

const Product = () => {
  const [users, setUsers] = useState([]);
  const [cards, setCard] = useState([]);

  const handleAddCard = (product) => {
    const newCard = [...cards, product];
    setCard(newCard);
  };
  useEffect(() => {
    fetch(
      " https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="product-container">
      <div className="product-item-card">
        {users.map((user) => (
          <Show key={user.id} user={user} handleAddCard={handleAddCard}></Show>
        ))}
      </div>
      <div className="order-summary">
        {cards.map((card) => (
          <Order card={card}></Order>
        ))}
      </div>
    </div>
  );
};

export default Product;
