import styled from 'styled-components';

export  const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 160px);
`;

export const FormCard = styled.form`
  background: white;
  padding: 40px;
  border-radius: 15px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0px 4px 20px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background-color: #f9f9f9;
  font-size: 14px;
  &:focus { outline: none; border-color: ${props => props.theme.colors.primary}; }
`;

export const Button = styled.button`
  background: #252525;
  color: white;
  font-weight: 600;
  height: 40px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.9; }
`;

export const ErrorMsg = styled.span`
  color: ${props => props.theme.colors.danger};
  font-size: 13px;
`;