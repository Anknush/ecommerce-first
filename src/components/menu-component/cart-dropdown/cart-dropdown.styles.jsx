import styled from "styled-components";
import CustomButton from "../custom-buttton/custom-button-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 340px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 70px;
  z-index: 5;
`;
export const CartItemsContainer = styled.div`
height: 340px;
display: flex;
flex - direction: column;
overflow: scroll;
`;
export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;
export const EmptyMessageSpan = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
