import React, { useState } from 'react';
import ContactComponent from './components/contactComponent';
import ContactForm from './components/contactForm';
import './App.css';

const App = () => {
  const defaultContact = [
    { name: 'Kike', surname: 'Paez', conected: true },
    { name: 'Ana', surname: 'Pozo', conected: true },
  ];

  const [newContact, setNewContact] = useState(defaultContact);

  function changeState(contact) {
    const index = newContact.indexOf(contact);
    const tempContact = [...newContact];

    tempContact[index].state = !tempContact[index].state;
    setNewContact(tempContact);
  }

  function remove(contact) {
    const index = newContact.indexOf(contact);
    const tempContact = [...newContact];
    tempContact.splice(index, 1);
    setNewContact(tempContact);
  }

  function addContact(contact) {
    const tempContact = [...newContact];
    tempContact.push(contact);
    setNewContact(tempContact);
  }

  return (
    <div className="App">
      <h1>Contactos</h1>

      <div className="card-container">
        {newContact.map((contact, index) => {
          return (
            <ContactComponent key={index} contact={contact} changeState={changeState} remove={remove} />
          );
        })}
      </div>

      <ContactForm onAddContact={addContact}></ContactForm>
    </div>
  );
};

export default App;