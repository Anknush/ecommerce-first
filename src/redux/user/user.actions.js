import { currentType } from "./current.type";

export const setCurrentUser = (user) => ({
  type: currentType.setCurrentUser,
  payload: user,
});
