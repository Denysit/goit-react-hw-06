import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact: { id, name, number } }) {

  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id) );
  };

  return (
    <>
       <div className={css.contactInfo}>
        <p className={css.text}><IoPersonSharp className={css.icon} />{name}</p>
        <p className={css.text}><FaPhoneAlt className={css.icon} />{number}</p>
          </div>
          <button className={css.deleteButton} onClick={() => handleDeleteContact(id)}>Delete</button>
    </>
  );
}
