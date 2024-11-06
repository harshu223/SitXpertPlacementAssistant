import React from 'react';
import styled from 'styled-components';

const CareerContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;

const CareerItem = styled.div`
  margin-bottom: 1rem;
`;

function CareerPath() {
  // Mock data for demonstration purposes
  const careerPaths = [
    { id: 1, title: 'Software Engineer', description: 'Learn programming languages and build software applications.' },
    { id: 2, title: 'Data Scientist', description: 'Analyze data and use statistical methods to make data-driven decisions.' },
    { id: 3, title: 'UI/UX Designer', description: 'Create user-friendly interfaces and design engaging user experiences.' },
  ];

  return (
    <CareerContainer>
      <h3>Career Path Recommendations</h3>
      {/* Map over the careerPaths array and render each career path suggestion */}
      {careerPaths.map(careerPath => (
        <CareerItem key={careerPath.id}>
          <h4>{careerPath.title}</h4>
          <p>{careerPath.description}</p>
        </CareerItem>
      ))}
    </CareerContainer>
  );
}

export default CareerPath;

