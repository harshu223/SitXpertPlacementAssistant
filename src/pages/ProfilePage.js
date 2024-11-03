import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../context/UserContext';
import UserProfile from '../components/UserProfile';

const ProfileContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 2rem auto;
  max-width: 800px;
`;

function ProfilePage() {
  const { user } = useContext(UserContext);

  return (
    <ProfileContainer>
      <h2>User Profile</h2>
      {user ? (
        <UserProfile />
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </ProfileContainer>
  );
}

export default ProfilePage;

