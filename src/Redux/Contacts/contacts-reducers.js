import { createReducer } from "@reduxjs/toolkit";

const itemsInitialState = [];
const itemsReducer = createReducer(itemsInitialState, {
  "fetch-contact-success": (_, { payload }) => payload,
  "delete-contact-success": (state, { payload }) => {
    const contantIndex = state.findIndex((item) => item.id === payload);
    const items = [
      ...state.slice(0, contantIndex),
      ...state.slice(contantIndex + 1),
    ];
    return items;
  },

  "add-contact-success": (state, { payload }) => {
    const updateItems = [
      ...state,
      {
        id: payload.id,
        name: payload.name,
        number: payload.number,
      },
    ];
    return updateItems;
  },
});
export default itemsReducer;
