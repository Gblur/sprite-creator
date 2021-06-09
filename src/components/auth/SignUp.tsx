import React, { useRef } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { auth } from '../../firebase';

export const SignUp = () => {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const [confirmed, setConfirmed] = React.useState(false);

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const passwordConfirm = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (email.current && password.current) {
      setUser({
        ...user,
        email: email.current.value,
        password: password.current.value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordConfirm && passwordConfirm.current) {
      if (user.password !== passwordConfirm.current.value) {
        alert('check password');
        return;
      }
      console.log(user);
      setConfirmed(true);
    }
  };

  return confirmed ? (
    <Redirect to="/grid" />
  ) : (
    <Card>
      <Card.Body>
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleChange}
              ref={email}
              type="email"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={password}
              onChange={handleChange}
              type="password"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              ref={passwordConfirm}
              onChange={handleChange}
              type="password"
              required
            />
          </Form.Group>
          <Button className="w-100" type="submit">
            Submit
          </Button>
          <Link to="/grid">GridGame</Link>
        </Form>
      </Card.Body>
    </Card>
  );
};
