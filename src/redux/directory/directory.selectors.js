import { createSelector } from "reselect";

const direstorySelector = (state) => state.directory;

export const directorSelector = createSelector(
  [direstorySelector],
  (directory) => directory.sources
);
