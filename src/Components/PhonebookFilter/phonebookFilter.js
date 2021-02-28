import React, { Component } from "react";
import shortid from "shortid";
import styles from "./phonebookFilter.module.css";

export default class PhonebookFilter extends Component {
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
        <label className={styles.label}>
          Find contact by name :
          <input
            className={styles.input}
            type="text"
            name="filter"
            onChange={this.handleInputChange}
          ></input>
        </label>
        {this.state.filter !== "" && this.filterContacts() ? (
          <ul>
            {this.filterContacts().map((query) => {
              return (
                <li className={styles.find} key={shortid.generate()}>
                  <p>
                    {query.name} : {query.number}
                  </p>
                </li>
              );
            })}
          </ul>
        ) : null}
      </>
    );
  }
}
