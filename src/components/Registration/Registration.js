import { Formik } from 'formik';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import { ErrorMessageBox, InputStyled } from './Registration.styled';

const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = ({ name, email, password }) => {
    dispatch(authOperations.register({ name, email, password }));
  };

  //email: "shenyalipinskiy@gmail.com"
  //name: 'Eugene';
  //password: '123456789';

  const nameRegExp =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        nameRegExp,
        `*Name may contain only letters, apostrophe, dash and spaces.`
      )
      .min(2, '*Name must have more than 2 characters')
      .required('*Name is required'),
    email: yup
      .string()
      .email('*Must be a valid email address')
      .required('*Email is required'),
    password: yup
      .string()
      .min(7, '*Password must have at least 7 characters')
      .required('*Password is required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmitForm(values);
        setSubmitting(true);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => {
        return (
          <Form name="registration" noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-5" controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <InputStyled
                type="name"
                name="name"
                placeholder="Enter name"
                value={values.name}
                onChange={handleChange}
                className={touched.name && errors.name ? 'error' : null}
                required
              />
              {touched.name && errors.name ? (
                <ErrorMessageBox className="error-message">
                  {errors.name}
                </ErrorMessageBox>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <InputStyled
                type="email"
                name="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                className={touched.email && errors.email ? 'error' : null}
                required
              />
              {touched.email && errors.email ? (
                <ErrorMessageBox className="error-message">
                  {errors.email}
                </ErrorMessageBox>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <InputStyled
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                className={touched.password && errors.password ? 'error' : null}
                required
              />
              {touched.password && errors.password ? (
                <ErrorMessageBox className="error-message">
                  {errors.password}
                </ErrorMessageBox>
              ) : null}
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Register
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Registration;
