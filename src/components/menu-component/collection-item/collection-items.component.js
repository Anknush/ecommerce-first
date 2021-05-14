import React from "react";
import { connect } from "react-redux";
import { AddItem } from "../../../redux/cart/cart.action";
import CustomButton from "../custom-buttton/custom-button-components";
import "./collection-item.styles.scss";
const ItemCollection = ({ item, AddItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <CustomButton onClick={() => AddItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchProps = (dispatch) => ({
  AddItem: (item) => dispatch(AddItem(item)),
});
export default connect(null, mapDispatchProps)(ItemCollection);
