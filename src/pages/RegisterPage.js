// src/pages/RegisterPage.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 2rem auto;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 1rem 0 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function RegisterPage() {
  const { register, error } = useContext(AuthContext);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      // Handle password mismatch
    } else {
      register({ name, email, password });
    }
  };

  return (
    <RegisterContainer>
      <h2>Register</h2>
      <Form onSubmit={onSubmit}>
        <Label>Name:</Label>
        <Input type="text" name="name" value={name} onChange={onChange} />
        <Label>Email:</Label>
        <Input type="email" name="email" value={email} onChange={onChange} />
        <Label>Password:</Label>
        <Input type="password" name="password" value={password} onChange={onChange} />
        <Label>Confirm Password:</Label>
        <Input type="password" name="password2" value={password2} onChange={onChange} />
        <Button type="submit">Register</Button>
      </Form>
      {error && <p>{error}</p>}
    </RegisterContainer>
  );
}

export default RegisterPage;
