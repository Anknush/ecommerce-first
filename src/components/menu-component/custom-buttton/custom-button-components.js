import React from "react";
import { CustomButtonConatiner } from "./custom-button.styles";

const CustomButton = ({ children, ...Props }) => (
  <CustomButtonConatiner {...Props}>{children}</CustomButtonConatiner>
);
export default CustomButton;
