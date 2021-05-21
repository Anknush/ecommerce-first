import { createSelector } from "reselect";

const shopData = (state) => state.shop;
export const shopSelector = createSelector(
  [shopData],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParams) =>
  createSelector(
    [shopSelector],
    (collections) => collections[collectionUrlParams]
  );
export const selectCollectionForPreview = createSelector(
  [shopSelector],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
