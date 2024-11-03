import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../context/UserContext';

const ProfileDetails = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <ProfileDetails>
      <h3>{user.name}'s Profile</h3>
      <p>Email: {user.email}</p>
      {/* Additional profile details */}
    </ProfileDetails>
  );
}

export default UserProfile;
