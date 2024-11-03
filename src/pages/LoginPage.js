// src/pages/LoginPage.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components';

const LoginContainer = styled.div`
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

function LoginPage() {
  const { login, error } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <Form onSubmit={onSubmit}>
        <Label>Email:</Label>
        <Input type="email" name="email" value={email} onChange={onChange} />
        <Label>Password:</Label>
        <Input type="password" name="password" value={password} onChange={onChange} />
        <Button type="submit">Login</Button>
      </Form>
      {error && <p>{error}</p>}
    </LoginContainer>
  );
}

export default LoginPage;
