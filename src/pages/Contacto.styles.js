import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #1e1e1e; /* Fondo más profundo */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  margin: 2rem auto;
  color: #f0f0f0; /* Texto claro */
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #f0f0f0; /* Mejor contraste */
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #bbb; /* Más legible sobre fondo oscuro */
`;

export const Input = styled.input`
  background-color: #333; /* Fondo oscuro para inputs */
  color: #f0f0f0;
  border: 1px solid #555;
  border-radius: 8px;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #00bcd4;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 188, 212, 0.2);
  }
`;

export const Textarea = styled.textarea`
  background-color: #333;
  color: #f0f0f0;
  border: 1px solid #555;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #00bcd4;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 188, 212, 0.2);
  }
`;

export const Button = styled.button`
  padding: 0.9rem 1.2rem;
  background-color: #00bcd4; /* Azul moderno */
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0097a7;
  }
`;