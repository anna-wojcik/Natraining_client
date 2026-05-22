import styled from "styled-components";

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 25px;
    color: ${(props) => props.theme.colors.textDark};
  }
`;

export const FormCard = styled.form`
  background: ${(props) => props.theme.colors.white};
  border: 1px solid rgb(236, 236, 236);
  border-radius: 10px;
  padding: 30px;
  width: 100%;

  @media (max-width: 640px) {
    padding: 15px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 15px;
  margin-bottom: 20px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }
`;

export const SaveButton = styled.button`
  padding: 10px 18px;
  background: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 640px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textDark};
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 12px;
  border: 1px solid
    ${(props) => (props.$hasError ? props.theme.colors.danger : "#e2e8f0")};
  border-radius: 6px;
  background-color: #f8fafc;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    background-color: white;
  }
`;

export const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background-color: #f8fafc;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    background-color: white;
  }
`;

export const PhotoUploadSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 25px 0 10px 0;
`;

export const UserAvatar = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f0f7ff;
`;

export const UploadLabel = styled.label`
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  font-size: 14px;
  font-weight: 500;
  padding: 2px 4px;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    border-radius: 4px;
  }
`;

export const ErrorText = styled.span`
  color: ${(props) => props.theme.colors.danger};
  font-size: 13px;
  margin-top: 2px;
`;

export const SpecializationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;

  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;