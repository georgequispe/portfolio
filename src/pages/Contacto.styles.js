import styled from 'styled-components';

export const FormContainer = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #555;
`;

export const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #0077ff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 119, 255, 0.2);
  }
`;

export const Textarea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #0077ff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 119, 255, 0.2);
  }
`;

export const Button = styled.button`
  padding: 0.9rem 1.2rem;
  background-color: #0077ff;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005fcc;
  }
`;


