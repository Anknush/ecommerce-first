import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../../redux/shop/shop.selectors";
import ItemCollection from "../../../components/menu-component/collection-item/collection-items.component";
const CollectionPages = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <ItemCollection key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPages);
