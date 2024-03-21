import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { useSelector } from 'react-redux';
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
    
     const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    
    const filteredContacts = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <ul className={css.contactList}>
            {filteredContacts.map((contact, index) => (
                <li className={css.contact} key={index}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    );
}
