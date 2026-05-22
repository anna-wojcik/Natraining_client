import styled from "styled-components";
import EditIcon from "../../assets/edit_pen.svg?react";

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderStyled = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.textDark};
`;
export const SubHeader = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.textLight};
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 12px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledEditIcon = styled(EditIcon)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
