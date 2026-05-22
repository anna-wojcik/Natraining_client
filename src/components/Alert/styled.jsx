import styled, { keyframes } from "styled-components";

export const slideDown = keyframes`
  0% { transform: translate(-50%, -100%); opacity: 0; }
  100% { transform: translate(-50%, 0); opacity: 1; }
`;

export const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

export const StyledAlert = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  border-radius: 6px;
  padding: 14px 50px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  pointer-events: none;

  animation:
    ${slideDown} 0.3s ease-out forwards,
    ${fadeOut} 0.5s ease-in 3.5s forwards;

  background-color: ${(props) =>
    props.$type === "success"
      ? props.theme.colors.success
      : props.theme.colors.danger};

  @media (max-width: 640px) {
    width: 90%;
    padding: 12px 20px;
    font-size: 12px;
    top: 10px;
  }
`;
