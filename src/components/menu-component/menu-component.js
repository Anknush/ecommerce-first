import React from "react";
import "./menu-component.scss";
const MenuItems = ({ title, size, imageUrl }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOWS</span>
    </div>
  </div>
);

export default MenuItems;
