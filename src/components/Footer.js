import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #012e4e;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 Consultancy Service. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
