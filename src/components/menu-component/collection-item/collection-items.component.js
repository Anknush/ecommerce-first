import React from "react";
import { connect } from "react-redux";
import { AddItem } from "../../../redux/cart/cart.action";
import { CollectionFooterContainer, CollectionItemContainer, ImageContainer, NameContainer, PriceConatiner, CustomButtonContainer } from "./collection-item.styles";
const ItemCollection = ({ item, AddItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceConatiner>{`$${price}`}</PriceConatiner>
      </CollectionFooterContainer>
      <CustomButtonContainer onClick={() => AddItem(item)} inverted>
        Add to Cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchProps = (dispatch) => ({
  AddItem: (item) => dispatch(AddItem(item)),
});
export default connect(null, mapDispatchProps)(ItemCollection);
