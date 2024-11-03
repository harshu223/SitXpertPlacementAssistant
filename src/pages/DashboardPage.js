import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import ResumeBuilder from '../components/ResumeBuilder';
import JobListings from '../components/JobListings';
import CareerPath from '../components/CareerPath';
import InterviewPrep from '../components/InterviewPrep';
import Feedback from '../components/Feedback';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

function DashboardPage() {
  const { user } = useContext(UserContext);

  return (
    <DashboardContainer>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <ResumeBuilder />
          <JobListings />
          <CareerPath />
          <InterviewPrep />
          <Feedback />
        </div>
      ) : (
        <p>Please log in to view your dashboard.</p>
      )}
    </DashboardContainer>
  );
}

export default DashboardPage;
