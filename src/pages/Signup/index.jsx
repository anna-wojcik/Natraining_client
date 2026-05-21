import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signupRequest } from "../../store/slices/authSlice";
import {
  SignupContainer,
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
  InputHint,
} from "./styled";
import { regexEmail, regexName, isValidField } from "../../regex";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [localErrors, setLocalErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error: serverError, loginStatus } = useSelector(
    (state) => state.auth,
  );
  const isLoading = loginStatus === "loading";

  const validateForm = () => {
    const errors = {};

    if (
      name.trim().length < 3 ||
      name.trim().length > 40 ||
      !isValidField(regexName, name))
    {
      errors.name = "Fullname must be in range 3-40 characters (letters only).";
    }
    if (!isValidField(regexEmail, email)) {
      errors.email = "Please provide a valid email address.";
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }
    if (passwordConfirm !== password) {
      errors.passwordConfirm = "Password confirm must be the same as password.";
    }

    setLocalErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    dispatch(
      signupRequest({ name, email, password, passwordConfirm, navigate }),
    );
  };

  return (
    <SignupContainer>
      {/* PANEL LEWY - KORZYŚCI */}
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

      {/* PANEL PRAWY - FORMULARZ */}
      <FormPanel>
        <FormCard onSubmit={handleSubmit}>
          <h2>Stwórze swoje konto</h2>
          <p className="subtitle">
            Załóż konto, aby w pełni korzystać z aplikacji!
          </p>

          {serverError && (
            <ErrorMsg style={{ marginBottom: "15px" }}>{serverError}</ErrorMsg>
          )}

          <InputGroup>
            <Label>Imię i Nazwisko</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jan Kowalski"
              $hasError={!!localErrors.name}
            />
            {localErrors.name && <ErrorMsg>{localErrors.name}</ErrorMsg>}
          </InputGroup>

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
            <InputHint>Użyj minimum 8 znaków.</InputHint>
            {localErrors.password && (
              <ErrorMsg>{localErrors.password}</ErrorMsg>
            )}
          </InputGroup>

          <InputGroup>
            <Label>Powtórz hasło</Label>
            <Input
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              placeholder="••••••••"
              $hasError={!!localErrors.passwordConfirm}
            />
            {localErrors.passwordConfirm && (
              <ErrorMsg>{localErrors.passwordConfirm}</ErrorMsg>
            )}
          </InputGroup>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Tworzenie konta..." : "Założ konto →"}
          </Button>

          <FormFooter>
            Posiadasz już konto? <Link to="/login">Zaloguj się</Link>
          </FormFooter>
        </FormCard>
      </FormPanel>
    </SignupContainer>
  );
};

export default Signup;

