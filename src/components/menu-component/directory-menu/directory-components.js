import React from "react";
import MenuItems from "../menu-component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { directorSelector } from "../../../redux/directory/directory.selectors";
import { DirectoryMenuContainer } from "./directory-menu.styles";
const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItems {...otherSectionProps} key={id} />
    ))}
  </DirectoryMenuContainer>
);
const mapStateToProps = createStructuredSelector({
  sections: directorSelector,
});
export default connect(mapStateToProps)(Directory);
