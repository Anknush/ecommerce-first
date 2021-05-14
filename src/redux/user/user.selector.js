import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectUserNotify = createSelector(
  [selectUser],
  (user) => user.currentUser
);
