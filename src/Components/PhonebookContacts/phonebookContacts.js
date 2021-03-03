import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./phonebookContacts.module.css";
import shortid from "shortid";

export default class PhonebookContact extends Component {
  state = {
    filter: "",
  };
  filterContacts = () => {
    const filtred = this.props.contacts.filter((contact) => {
      if (
        contact.name
          .toLowerCase()
          .includes(this.state.filter.toLocaleLowerCase())
      ) {
        return contact;
      }
      return null;
    });
    return filtred;
  };
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.filterContacts();
  };
  render() {
    return (
      <>
        <h2>Contacts</h2>
        <label className={styles.label}>
          Find contact by name :
          <input
            className={styles.input}
            type="text"
            name="filter"
            onChange={this.handleInputChange}
          ></input>
        </label>
        <ul className={styles.list}>
          {this.state.filter !== "" && this.filterContacts() ? (
            <>
              {this.filterContacts().map((query) => {
                return (
                  <li className={styles.item} key={shortid.generate()}>
                    <p>
                      {query.name} : {query.number}
                    </p>
                    <button
                      className={styles.button}
                      name={query.id}
                      onClick={this.props.deleteContact}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </>
          ) : (
            this.props.contacts.map((contact) => (
              <li key={contact.id} className={styles.item}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <button
                  className={styles.button}
                  name={contact.id}
                  onClick={this.props.deleteContact}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </>
    );
  }
}

PhonebookContact.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
