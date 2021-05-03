import React from "react";
import PreviewItems from "../../../components/menu-component/preview-items/preview-component";
import SHOP_DATA from "./shop-state";

class ShopData extends React.Component {
  constructor() {
    super();

    this.state = {
      Collections: SHOP_DATA,
    };
  }
  render() {
    const { Collections } = this.state;

    return (
      <div className="shop-page">
        {Collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewItems key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopData;
