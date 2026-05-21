import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Header";
import {
  LayoutWrapper,
  LogoLink,
  MainContent,
  Footer,
  FooterContainer,
  FooterLinksBlock,
  FooterNav,
  CopyrightBlock,
} from "./styled";

const MainLayout = () => (
  <LayoutWrapper>
    <Header />

    <MainContent>
      <Outlet />
    </MainContent>

    <Footer>
      <FooterContainer>
        <LogoLink to="/" style={{ fontSize: "24px" }}>
          <img
            src="http://localhost:3000/img/sportCenter-logo.png"
            alt="Logo"
            style={{ height: "40px", width: "40px" }}
          />
          <span>SportCenter</span>
        </LogoLink>
        <FooterLinksBlock>
          <FooterNav>
            <li>
              <Link to="#">O nas</Link>
            </li>
            <li>
              <Link to="#">Pobierz aplikację</Link>
            </li>
            <li>
              <Link to="#">Zostań trenerem</Link>
            </li>
            <li>
              <Link to="#">Kariera</Link>
            </li>
            <li>
              <Link to="#">Kontakt</Link>
            </li>
          </FooterNav>
          <CopyrightBlock>
            <p>
              SportCenter sp. z o. o. &copy; 2026. Wszelkie prawa zastrzeżone.
            </p>
            <p style={{ display: "flex", flexDirection: "row-reverse" }}>
              Stworzone przez Annę Wójcik
            </p>
          </CopyrightBlock>
        </FooterLinksBlock>
      </FooterContainer>
    </Footer>
  </LayoutWrapper>
);

export default MainLayout;
