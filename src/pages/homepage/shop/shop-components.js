import React from "react";
import CollectionOverview from "../../../components/menu-component/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPages from "../collection/collection.component";
const ShopData = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPages} />
    </div>
  );
};

export default ShopData;
