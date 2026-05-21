import { useSelector, useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { logoutRequest, selectUser } from "../../store/slices/authSlice";
import {
  LayoutWrapper,
  Container,
  Sidebar,
  ProfileCard,
  Avatar,
  RoleBadge,
  NavList,
  NavItem,
  ContentArea,
  LogoutButton,
} from "./styled";
import Header from "../../components/Header";

export default function DashboardLayout() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const location = useLocation();

  if (!user) return null;

  return (
    <LayoutWrapper>
      <Header />
      <Container>
        <Sidebar>
          <ProfileCard>
            <Avatar
              src={`http://localhost:3000/img/users/${user.photo}`}
              alt={user.name}
            />
            <h3>{user.name}</h3>
            <RoleBadge>{user.role}</RoleBadge>
          </ProfileCard>

          <NavList>
            <NavItem
              to="/profile/settings"
              $active={location.pathname === "/profile/settings"}
            >
              ⚙️ Ustawienia
            </NavItem>

            {user.role === "admin" && (
              <>
                <NavItem
                  to="/profile/manage-trainings"
                  $active={location.pathname === "/profile/manage-trainings"}
                >
                  📅 Harmonogram
                </NavItem>
                <NavItem
                  to="/profile/manage-users"
                  $active={location.pathname === "/profile/manage-users"}
                >
                  👥 Użytkownicy
                </NavItem>
                <NavItem
                  to="/profile/manage-comments"
                  $active={location.pathname === "/profile/manage-comments"}
                >
                  💬 Komentarze
                </NavItem>
                <NavItem
                  to="/profile/manage-bookings"
                  $active={location.pathname === "/profile/manage-bookings"}
                >
                  💳 Rezerwacje
                </NavItem>
              </>
            )}

            {user.role === "trainer" && (
              <>
                <NavItem
                  to="/profile/my-schedule"
                  $active={location.pathname === "/profile/my-schedule"}
                >
                  📅 Mój harmonogram
                </NavItem>
              </>
            )}

            {user.role === "user" && (
              <>
                <NavItem
                  to="/profile/my-bookings"
                  $active={location.pathname === "/profile/my-bookings"}
                >
                  💳 Rezerwacje
                </NavItem>
                <NavItem
                  to="/profile/favorites"
                  $active={location.pathname === "/profile/favorites"}
                >
                  ❤️ Ulubione treningi
                </NavItem>
              </>
            )}
          </NavList>

          <LogoutButton onClick={() => dispatch(logoutRequest())}>
            🚪 Wyloguj się
          </LogoutButton>
        </Sidebar>

        <ContentArea>
          <Outlet />
        </ContentArea>
      </Container>
    </LayoutWrapper>
  );
}
