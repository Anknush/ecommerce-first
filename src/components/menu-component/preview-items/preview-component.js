import React from "react";
import ItemCollection from "../collection-item/collection-items.component";
import "./preview.styles.scss";
const PreviewItems = ({ items, title }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <ItemCollection key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default PreviewItems;
