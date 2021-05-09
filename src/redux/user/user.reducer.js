import { currentType } from "./current.type";

const Initial_State = {
  currentUser: null,
};
const UserReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case currentType.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
