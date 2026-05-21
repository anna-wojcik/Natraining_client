import styled from "styled-components";

export const SignupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  min-height: calc(100vh - 160px);
  background: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  margin: 20px auto;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoPanel = styled.div`
  background: linear-gradient(135deg, #5b3bf5 0%, #3b66fe 100%);
  padding: 60px 40px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 940px) {
    padding: 40px 30px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 40px;
  opacity: 0.9;
`;

export const BenefitsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 15px;
  font-weight: 400;

  &:before {
    content: "✓";
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    min-width: 24px;
    height: 24px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const FormPanel = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 940px) {
    padding: 40px 30px;
  }
`;

export const FormCard = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;

  h2 {
    font-size: 26px;
    font-weight: 600;
    margin: 0;
  }

  .subtitle {
    font-size: 14px;
    color: ${(props) => props.theme.colors.textLight};
    margin: 0 0 10px 0;
  }
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
  height: 44px;
  padding: 0 14px;
  border: 1px solid ${(props) => (props.$hasError ? props.theme.colors.danger : "#e0e6ed")};
  border-radius: 8px;
  background-color: #f8fafc;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$hasError ? props.theme.colors.danger : props.theme.colors.primary)};
    background-color: white;
  }
`;

export const InputHint = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.textLight};
  margin-top: -2px;
`;

export const ErrorMsg = styled.span`
  color: ${(props) => props.theme.colors.danger};
  font-size: 13px;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  font-weight: 600;
  font-size: 15px;
  height: 46px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const FormFooter = styled.div`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.textLight};

  a {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
    margin-left: 5px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;