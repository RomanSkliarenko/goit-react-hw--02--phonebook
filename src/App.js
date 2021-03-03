import React, { Component } from "react";
import PhonebookContact from "./Components/PhonebookContacts/phonebookContacts";
// import PhonebookFilter from "./Components/PhonebookFilter/phonebookFilter";
import PhonebookForm from "./Components/PhonebookForm/phonebookForm";
import styles from "./App.module.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      { id: "id-5", name: "Roman Skliarenko", number: "247-56-71" },
    ],
  };
  componentDidMount() {
    const storage = localStorage.getItem("contacts");
    const parsedStorage = JSON.parse(storage);
    if (parsedStorage) {
      this.setState({ contacts: parsedStorage });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = (event) => {
    this.handleDeleteContact(event.currentTarget.name);
  };
  handleDeleteContact = (id) => {
    this.setState((prevState) => {
      const contantIndex = prevState.contacts.findIndex(
        (item) => item.id === id
      );
      const contacts = [
        ...prevState.contacts.slice(0, contantIndex),
        ...prevState.contacts.slice(contantIndex + 1),
      ];
      return { contacts };
    });
  };
  updateContacts = ({ name, id, number }) => {
    const alredyInContacts = this.state.contacts.find((item) => {
      return item.name === name || item.number === number;
    });
    if (alredyInContacts) {
      alert("Такой контакт уже есть!");
      return;
    } else if (name === "") {
      alert("Введите имя для добавления!");
      return;
    } else if (number === "") {
      alert("Введите номер для добавления!");
      return;
    } else if (name !== "" && number !== "") {
      this.setState((prevState) => {
        return { contacts: [...prevState.contacts, { id, name, number }] };
      });
      return;
    } else {
      alert("Что-то пошло не так :(");
      return;
    }
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Phonebook</h1>
        <PhonebookForm updateContacts={this.updateContacts} />
        <PhonebookContact {...this.state} deleteContact={this.deleteContact} />
        {/* <PhonebookFilter {...this.state} /> */}
      </div>
    );
  }
}

export default App;
