import styled from "styled-components";
import { Link } from "react-router-dom";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 20px;
  padding: 40px 0;
  flex: 1;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1400px) {
    padding: 20px 50px;
    gap: 15px;
  }
  @media (max-width: 640px) {
    padding: 10px 20px;
    gap: 0px;
  }
`;

export const Footer = styled.footer`
  margin-top: 100px;
  background: #373737;
  padding: 30px 0;
  @media (max-width: 1400px) {
    margin-top: 70px;
  }
  @media (max-width: 640px) {
    margin-top: 50px;
    padding: 0;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 30px;

  @media (max-width: 1400px) {
    padding: 0 50px;
  }
  @media (max-width: 640px) {
    padding: 20px;
    flex-direction: column;
    gap: 15px;
  }
`;

export const FooterLinksBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  @media (max-width: 640px) {
    gap: 12px;
  }
`;

export const FooterNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 640px) {
    gap: 4px;
  }

  a {
    color: white;
    font-size: 16px;
    font-weight: 300;
    &:hover {
      text-decoration: underline;
    }
    @media (max-width: 1400px) {
      font-size: 14px;
    }
    @media (max-width: 640px) {
      font-size: 12px;
    }
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

export const CopyrightBlock = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  p {
    margin: 0;
  }
  @media (max-width: 1400px) {
    font-size: 14px;
    gap: 10px;
  }
  @media (max-width: 640px) {
    font-size: 12px;
    gap: 20px;
  }
`;
