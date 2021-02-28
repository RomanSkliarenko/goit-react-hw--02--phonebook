import React from "react";
import PropTypes from "prop-types";
import styles from "./phonebookContacts.module.css";

const PhonebookContact = ({ contacts, deleteContact }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.item}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button
              className={styles.button}
              name={contact.id}
              onClick={deleteContact}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
PhonebookContact.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default PhonebookContact;
