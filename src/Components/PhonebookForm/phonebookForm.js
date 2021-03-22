import React, { Component } from "react";
import shortid from "shortid";
import styles from "./phonebookForm.module.css";
import { connect } from "react-redux";
import { addContact } from "../../Operation/operation";

class PhonebookForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  formSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      number: this.state.number,
      id: shortid.generate(),
    };
    const { name, number } = user;
    const alredyInContacts = this.props.contacts.find((item) => {
      return item.name === name || item.number === number;
    });
    if (alredyInContacts) {
      alert("Такой контакт уже есть!");
      this.formReset();
      return;
    } else if (name === "") {
      alert("Введите имя для добавления!");
      return;
    } else if (number === "") {
      alert("Введите номер для добавления!");
      return;
    } else if (name !== "" && number !== "") {
      this.props.updateContacts(user);
      this.formReset();
      return;
    } else {
      alert("Что-то пошло не так :(");
      this.formReset();
      return;
    }
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
const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateContacts: (value) => dispatch(addContact(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PhonebookForm);
