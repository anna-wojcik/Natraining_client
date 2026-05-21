import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginRequest, clearError } from "../../store/slices/authSlice";
import { selectError, selectLoading } from "../../store/slices/authSlice";
import { isValidField, regexEmail } from "../../regex";

import {
  SignupContainer as LoginContainer,
  InfoPanel,
  FormPanel,
  FormCard,
  InputGroup,
  Label,
  Input,
  Button,
  ErrorMsg,
  Title,
  Subtitle,
  BenefitsList,
  BenefitItem,
  FormFooter,
} from "../Signup/styled";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localErrors, setLocalErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const serverError = useSelector(selectError);
  const loginLoading = useSelector(selectLoading);

  const validateForm = () => {
    const errors = {};

    if (!isValidField(regexEmail, email)) {
      errors.email = "Please provide a valid email address.";
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }

    setLocalErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearError());

    if (!validateForm()) return;

    dispatch(loginRequest({ email, password, navigate }));
  };

  return (
    <LoginContainer>
      {/* PANEL LEWY */}
      <InfoPanel>
        <Title>Dołącz do SportCenter!</Title>
        <Subtitle>
          Zaloguj się lub załóż konto, aby w pełni korzystać z możliwości naszej
          platformy:
        </Subtitle>
        <BenefitsList>
          <BenefitItem>Szybka i wygodna rezerwacja zajęć</BenefitItem>
          <BenefitItem>Zarządzanie swoim grafikiem treningów</BenefitItem>
          <BenefitItem>Przeglądanie profili najlepszych trenerów</BenefitItem>
          <BenefitItem>Dostęp do historii treningów i opinii</BenefitItem>
        </BenefitsList>
      </InfoPanel>

      {/* PANEL PRAWY */}
      <FormPanel>
        <FormCard onSubmit={handleSubmit}>
          <h2>Witamy ponownie!</h2>
          <p className="subtitle">
            Zaloguj się do swojego konta, aby w pełni korzystać z aplikacji!
          </p>

          {serverError && (
            <ErrorMsg style={{ marginBottom: "15px" }}>{serverError}</ErrorMsg>
          )}

          <InputGroup>
            <Label>E-mail</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jan.kowalski@gmail.com"
              $hasError={!!localErrors.email}
            />
            {localErrors.email && <ErrorMsg>{localErrors.email}</ErrorMsg>}
          </InputGroup>

          <InputGroup>
            <Label>Hasło</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              $hasError={!!localErrors.password}
            />
            {localErrors.password && (
              <ErrorMsg>{localErrors.password}</ErrorMsg>
            )}
          </InputGroup>

          <Button type="submit" disabled={loginLoading}>
            {loginLoading ? "Logowanie..." : "Zaloguj się →"}
          </Button>

          <FormFooter>
            Nie masz jeszcze konta? <Link to="/signup">Stwórz konto</Link>
          </FormFooter>
        </FormCard>
      </FormPanel>
    </LoginContainer>
  );
}
