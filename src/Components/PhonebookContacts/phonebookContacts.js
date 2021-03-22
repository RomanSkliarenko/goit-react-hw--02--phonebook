import React, { Component } from "react";
import styles from "./phonebookContacts.module.css";
import shortid from "shortid";
import { connect } from "react-redux";
import * as filterActions from "../../Redux/Filter/filter-actions";
import { deleteContact, fetchContact } from "../../Operation/operation";
import selectors from "../../Redux/selectors";

class PhonebookContact extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }
  filterContacts = () => {
    const { filter, contacts } = this.props;
    const filtred = contacts.filter((contact) => {
      if (contact.name.toLowerCase().includes(filter.toLocaleLowerCase())) {
        return contact;
      }
      return null;
    });
    return filtred;
  };
  handleInputChange = (event) => {
    this.props.changeFilter(event.target.value);
    this.filterContacts();
  };
  render() {
    const { filter, contacts } = this.props;
    return (
      <>
        <h2>Contacts</h2>
        <label className={styles.label}>
          Find contact by name :
          <input
            className={styles.input}
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <ul className={styles.list}>
          {filter !== "" && this.filterContacts() ? (
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
                      onClick={() => this.props.deleteContact(query.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </>
          ) : (
            contacts.map((contact) => (
              <li key={contact.id} className={styles.item}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <button
                  className={styles.button}
                  name={contact.id}
                  onClick={() => this.props.deleteContact(contact.id)}
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
const mapStateToProps = (state) => ({
  contacts: selectors.getContacts(state),
  filter: selectors.getFilterValue(state),
  // contacts: state.contacts.items,
  // filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (value) => dispatch(deleteContact(value)),
    fetchContact: () => dispatch(fetchContact()),
    changeFilter: (value) => dispatch(filterActions.changeFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookContact);
