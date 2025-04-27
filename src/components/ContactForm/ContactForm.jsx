import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(3).max(50).required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { ...values, id: nanoid() };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label className={styles.label}>
          Number
          <Field name="number" />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
