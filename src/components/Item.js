import React, { useState } from "react";
function Item({ itemName, itemCategory }) {
  const [itemInCart, setItemInCart] = useState(false);

  function handleAddToCartClick() {
    setItemInCart((IteminCart) => !IteminCart);
  }

  return (
    <li className={itemInCart ? "in-cart" : ""}>
      <span>{itemName}</span>
      <span className="category">{itemCategory}</span>
      <button
        className={itemInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {itemInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
