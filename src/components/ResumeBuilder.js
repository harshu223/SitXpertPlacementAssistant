
import React, { useState } from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #012e4e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #014f7b;
  }
`;
function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: '',
  });

  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: Generate a simple resume preview
    const generatedResume = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Education: ${formData.education}
      Experience: ${formData.experience}
      Skills: ${formData.skills}
    `;
    setResume(generatedResume);
  };
  return (
    <ResumeContainer>
      <h3>Resume Builder</h3>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextArea
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
        />
        <TextArea
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
        />
        <TextArea
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
        />
        <Button type="submit">Generate Resume</Button>
      </Form>
      {resume && (
        <div>
          <h4>Resume Preview:</h4>
          <pre>{resume}</pre>
        </div>
      )}
    </ResumeContainer>
  );
}

export default ResumeBuilder;

