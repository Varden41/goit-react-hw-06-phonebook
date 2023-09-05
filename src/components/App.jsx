// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(localStorage.getItem('contacts')) ?? [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ]
  //   );
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const onFilter = filteredText => {
  //   setFilter(filteredText);
  // };

  // const onFilteredContacts = () => {
  //   if (filter) {
  //     return contacts.filter(contact => {
  //       return contact.name.toLowerCase().includes(filter.toLowerCase());
  //     });
  //   }
  //   return contacts;
  // };

  // const dataHandler = (name, number) => {
  //   if (
  //     contacts.find(
  //       contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  //     )
  //   ) {
  //     return alert(`${name} is already in contacts.`);
  //   }

  //   setContacts(state => [...state, { id: nanoid(), name, number }]);
  // };

  // const onDelete = deleteId => {
  //   setContacts(state => state.filter(contact => contact.id !== deleteId));
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
