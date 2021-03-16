import { createReducer } from "@reduxjs/toolkit";

const itemsInitialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  { id: "id-5", name: "Roman Skliarenko", number: "247-56-71" },
];
const itemsReducer = createReducer(itemsInitialState, {
  "delete-contact": (state, { payload }) => {
    const contantIndex = state.findIndex((item) => item.id === payload);
    const items = [
      ...state.slice(0, contantIndex),
      ...state.slice(contantIndex + 1),
    ];
    return items;
  },
  "add-contact": (state, { payload }) => {
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
