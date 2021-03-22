import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("add-contact-request");
export const addContactSuccess = createAction("add-contact-success");
export const addContactError = createAction("add-contact-error");
export const deleteContactRequest = createAction("delete-contact-request");
export const deleteContactSuccess = createAction("delete-contact-success");
export const deleteContactError = createAction("delete-contact-error");

export const fetchContactRequest = createAction("fetch-contact-request");
export const fetchContactSuccess = createAction("fetch-contact-success");
export const fetchContactError = createAction("fetch-contact-error");
const actions = {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
};
export default actions;
