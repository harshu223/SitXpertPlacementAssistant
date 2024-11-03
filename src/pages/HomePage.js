// src/pages/HomePage.js
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 2rem auto;
  max-width: 800px;
  text-align: center;
`;

function HomePage() {
  return (
    <HomeContainer>
      <h1>Welcome to SitXpert Placement Assistant</h1>
      <p>Your one-stop solution for career guidance and job search.</p>
    </HomeContainer>
  );
}

export default HomePage;
