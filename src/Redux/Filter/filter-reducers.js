import { createReducer } from "@reduxjs/toolkit";
const filterReducer = createReducer("", {
  "change-filter": (_, { payload }) => payload,
});
export default filterReducer;
