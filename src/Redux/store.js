import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import itemsReducer from "./Contacts/contacts-reducers";
import filterReducer from "./Filter/filter-reducers";
import logger from "redux-logger";
const middleWare = [...getDefaultMiddleware(), logger];

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleWare,
});
export default store;
