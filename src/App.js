import PhonebookContact from "./Components/PhonebookContacts/phonebookContacts";
import PhonebookForm from "./Components/PhonebookForm/phonebookForm";
import styles from "./App.module.css";
import { connect } from "react-redux";

const App = function () {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <PhonebookForm />
      <PhonebookContact />
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
