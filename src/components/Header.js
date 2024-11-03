import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #012e4e;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin: 0 1rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <Nav>
      <h1>SitXpert Placement Assistant</h1>
      <Ul>
        <Li><StyledLink to="/">Home</StyledLink></Li>
        <Li><StyledLink to="/profile">Profile</StyledLink></Li>
        <Li><StyledLink to="/dashboard">Dashboard</StyledLink></Li>
      </Ul>
    </Nav>
  );
}

export default Header;
