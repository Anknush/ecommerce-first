import React from "react";
import MenuItems from "../menu-component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./directory-menu-styles.scss";
import { directorSelector } from "../../../redux/directory/directory.selectors";
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItems {...otherSectionProps} key={id} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  sections: directorSelector,
});
export default connect(mapStateToProps)(Directory);
