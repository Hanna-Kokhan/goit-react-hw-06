import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { FaUser, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <span className={styles.name}>
          <FaUser />
          {contact.name}
        </span>
        <span className={styles.number}>
          <FaPhone />
          {contact.number}
        </span>
      </div>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
