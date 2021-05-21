import React from "react";
import "./collection-overview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../../redux/shop/shop.selectors";
import PreviewItems from "../preview-items/preview-component";
const CollectionOverview = ({ shopItem }) => (
  <div className="collection-overview">
    {shopItem.map(({ id, ...otherCollectionProps }) => (
      <PreviewItems key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  shopItem: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
