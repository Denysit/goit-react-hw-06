import { useState, useEffect} from 'react'
import './App.css'
import ContactList from './assets/components/ContactList/ContactList'
import ContactForm from './assets/components/ContactForm/ContactForm'
import SearchBox from './assets/components/SearchBox/SearchBox'
import { nanoid } from 'nanoid';

function App() {

  const [dataContacts, setDataContacts] = useState(() => {
  const savedContacts = JSON.parse(localStorage.getItem("save-contact"));
  if (savedContacts) {
    return savedContacts;
  } else {
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  }
});

  useEffect(() => {
    window.localStorage.setItem("save-contact", JSON.stringify(dataContacts));
  }, [dataContacts]);
   
  const addContact = (newContact) => {
    setDataContacts((prevContacts) => {
      return [...prevContacts, { ...newContact, id: nanoid() }];
    });
  
  };

  const deleteContact = (contactId) => {
    setDataContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const filteredContact = dataContacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());
  });

  return (
    <div className='container'>
      <h1 className='title'>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList filteredContact={filteredContact} deleteContact={deleteContact} />
    </div>
  );
}

export default App
