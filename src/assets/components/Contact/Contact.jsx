import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ data: { id, name, number }, deleteContact }) {
  return (
    <>
       <div className={css.contactInfo}>
        <p className={css.text}><IoPersonSharp className={css.icon} />{name}</p>
        <p className={css.text}><FaPhoneAlt className={css.icon} />{number}</p>
          </div>
          <button className={css.deleteButton} onClick={() => deleteContact(id)}>Delete</button>
    </>
  );
}
