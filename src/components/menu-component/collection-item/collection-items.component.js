import React from "react";
import CustomButton from "../custom-buttton/custom-button-components";
import "./collection-item.styles.scss";
const ItemCollection = ({ name, price, imageUrl, id }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{`$${price}`}</span>
    </div>
    <CustomButton inverted>Add to Cart</CustomButton>
  </div>
);
export default ItemCollection;
