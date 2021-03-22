const getContacts = (state) => state.contacts.items;
const getFilterValue = (state) => state.contacts.filter;
const selectors = { getContacts, getFilterValue };

export default selectors;
