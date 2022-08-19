import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputStyled } from './LogIn.styled';

export const LogIn = () => {
  const [validated, setValidated] = useState(false);

  const oldForm = document.forms.login;
  const formData = new FormData(oldForm);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.dir(formData);
    setValidated(true);
    // e.currentTarget.reset();
  };
  return (
    <Form name="login" noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <InputStyled type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <InputStyled type="password" placeholder="Password" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        LOGIN
      </Button>
    </Form>
  );
};
