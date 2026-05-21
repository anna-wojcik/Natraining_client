import { Link } from "react-router-dom";
import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: calc(100vh - 80px);
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  gap: 30px;
  padding: 40px 20px;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.white};
  border-radius: 15px;
  padding: 30px 0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #f0f7ff;
  margin-bottom: 10px;
`;

export const RoleBadge = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.textLight};
  margin-top: 4px;
`;

export const NavList = styled.ul`
  list-style: none;
  margin-top: 20px;
`;

export const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 14px 25px;
  font-size: 15px;
  color: ${(props) => (props.$active ? props.theme.colors.primary : "#555555")};
  background-color: ${(props) => (props.$active ? "#f4f9ff" : "transparent")};
  border-left: 4px solid
    ${(props) => (props.$active ? props.theme.colors.primary : "transparent")};
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  gap: 15px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f4f9ff;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const ContentArea = styled.main`
  background: ${(props) => props.theme.colors.white};
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 14px 25px;
  font-size: 15px;
  color: ${(props) => props.theme.colors.danger};
  gap: 15px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  margin-top: auto;

  &:hover {
    background-color: #f4f9ff;
    color: ${(props) => props.theme.colors.primary};
  }
`;