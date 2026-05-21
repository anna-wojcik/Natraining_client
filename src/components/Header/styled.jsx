import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  height: 80px;
  background: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: 0px 7px 8px -4px rgba(192, 192, 192, 0.5);
  padding: 0 100px;

  @media (max-width: 1400px) {
    height: 70px;
    padding: 10px 50px;
  }

  @media (max-width: 640px) {
    height: 60px;
    padding: 0 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 640px) {
    gap: 8px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 40px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};

  img {
    width: 60px;
    @media (max-width: 1400px) {
      width: 50px;
    }
    @media (max-width: 640px) {
      width: 40px;
    }
  }

  span {
    @media (max-width: 1400px) {
      font-size: 30px;
    }
    @media (max-width: 640px) {
      font-size: 20px;
    }
  }
`;

export const UserNavBlock = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 300;
  color: rgb(107, 107, 107);
  font-size: 18px;

  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 640px) {
    font-size: 12px;
  }

  img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    @media (max-width: 640px) {
      height: 24px;
      width: 24px;
    }
  }

  span.name {
    @media (max-width: 640px) {
      display: none;
    }
  }
`;

export const NavButton = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  height: 40px;
  padding: 0 20px;
  background: ${(props) =>
    props.$signup ? props.theme.colors.secondary : props.theme.colors.primary};

  &:hover {
    background: ${(props) =>
      props.$signup ? "hsl(37, 100%, 45%)" : props.theme.colors.primaryHover};
  }

  @media (max-width: 1400px) {
    font-size: 16px;
    height: 36px;
  }

  @media (max-width: 640px) {
    font-size: 12px;
    font-weight: 400;
    height: 24px;
    padding: 0 10px;
  }
`;
