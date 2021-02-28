import React, { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import styles from "./phonebookForm.module.css";

export default class PhonebookForm extends Component {
  state = {
    name: "",
    number: "",
  };
  static propTypes = {
    updateContacts: PropTypes.func.isRequired,
  };
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  formSubmit = (e) => {
    e.preventDefault();
    this.props.updateContacts({
      name: this.state.name,
      number: this.state.number,
      id: shortid.generate(),
    });
    this.formReset();
  };
  formReset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form onSubmit={this.formSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            name="name"
            type="text"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            name="number"
            type="number"
            onChange={this.handleInputChange}
            value={this.state.number}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
