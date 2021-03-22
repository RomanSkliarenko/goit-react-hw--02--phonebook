import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "../Redux/Contacts/contacts-actions";

axios.defaults.baseURL = "http://localhost:4040";

export const addContact = ({ name, number, id }) => (dispatch) => {
  const contact = {
    name,
    number,
    id,
  };
  dispatch(addContactRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export const fetchContact = () => (dispatch) => {
  dispatch(fetchContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error)));
};
const operations = { addContact, deleteContact, fetchContact };
export default operations;
