import React from 'react';
import styled from 'styled-components';

const CareerPathContainer = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;

const CareerPathItem = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const CareerPathTitle = styled.h4`
  margin: 0 0 0.5rem 0;
`;

const CareerPathDescription = styled.p`
  margin: 0;
`;

const mockCareerPaths = [
  {
    id: 1,
    title: 'Full Stack Developer',
    description: 'Learn both front-end and back-end development to build complete web applications.',
  },
  {
    id: 2,
    title: 'Data Scientist',
    description: 'Focus on data analysis, machine learning, and statistical modeling to derive insights from data.',
  },
  {
    id: 3,
    title: 'Project Manager',
    description: 'Develop skills in project planning, execution, and team management to lead projects successfully.',
  },
];

function CareerPathRecommendations() {
  return (
    <CareerPathContainer>
      <h3>Career Path Recommendations</h3>
      {mockCareerPaths.map((path) => (
        <CareerPathItem key={path.id}>
          <CareerPathTitle>{path.title}</CareerPathTitle>
          <CareerPathDescription>{path.description}</CareerPathDescription>
        </CareerPathItem>
      ))}
    </CareerPathContainer>
  );
}

export default CareerPathRecommendations;
