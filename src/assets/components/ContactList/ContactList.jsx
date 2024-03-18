import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ filteredContact, deleteContact }) {
    return (
        <ul className={css.contactList}>
            {filteredContact.map((contact, index) => (
                <li className={css.contact} key={index}>
                    <Contact data={contact} deleteContact={deleteContact} />
                </li>
            ))}
        </ul>
    );
}
