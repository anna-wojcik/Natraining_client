import { useSelector } from "react-redux";
import {
  selectIsAuthenticated,
  selectUser,
} from "../../store/slices/authSlice";
import {
  HeaderContainer,
  Nav,
  LogoLink,
  UserNavBlock,
  NavButton,
} from "./styled";

const Header = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <img src="http://localhost:3000/img/sportCenter-logo.png" alt="Logo" />
        <span>SportCenter</span>
      </LogoLink>

      <Nav>
        {isAuthenticated ? (
          <>
            <UserNavBlock to="/profile">
              <img
                src={`http://localhost:3000/img/users/${user?.photo}`}
                alt={user?.name}
              />
              <span className="name">{user?.name?.split(" ")[0]}</span>
            </UserNavBlock>
          </>
        ) : (
          <>
            <NavButton to="/login">Log in</NavButton>
            <NavButton to="/signup" $signup>
              Sign up
            </NavButton>
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
