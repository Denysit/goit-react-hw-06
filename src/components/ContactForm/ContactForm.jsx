import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too long!")
    .required("Required!"),
  number: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .required("Phone number is required")
});


export default function ContactForm() {
  
  const dispatch = useDispatch();

  const handleAddContact = (values, resetForm) => {
    const id = nanoid();
    dispatch(addContact({ ...values, id }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: ""
      }}
      onSubmit={(values, { resetForm }) => handleAddContact(values, resetForm)}
      validationSchema={userSchema}>
      <Form className={css.form}>
        <label htmlFor="name" className={css.label}>
          Name
        </label>
        <Field type="text" name="name" id="name" className={css.input} />
        <ErrorMessage name="name" component="span" className={css.error} />

        <label htmlFor="number" className={css.label}>
          Phone
        </label>
        <Field
          type="text"
          id="number"
          name="number"
          className={css.input}/>
        <ErrorMessage name="number" component="span" className={css.error} />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
