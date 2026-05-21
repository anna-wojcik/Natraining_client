import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../store/slices/authSlice";
import { selectError, selectLoading, clearError } from "../../store/slices/authSlice";
import {
  LoginContainer,
  FormCard,
  InputGroup,
  Label,
  Input,
  Button,
  ErrorMsg,
} from "./styled";
import { isValidField, regexEmail } from "../../regex";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectError);
  const loginLoading = useSelector(selectLoading);

  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    let isError = false;
    if (!isValidField(regexEmail, email)) {
      setValidEmail(false);
      isError = true;
    } else {
      setValidEmail(true);
    }
    if (password.length < 8) {
      setValidPassword(false);
      isError = true;
    } else {
      setValidPassword(true);
    }

    if (!isError) {
      dispatch(loginRequest({ email, password, navigate }));
    }
    dispatch(clearError());
  };

  return (
    <LoginContainer>
      <FormCard onSubmit={handleSubmit}>
        <h2>Zaloguj się</h2>
        <InputGroup>
          <Label>E-mail</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="jan.kowalski@example.com"
          />
          {!validEmail && (
            <ErrorMsg>Please provide a valid email address</ErrorMsg>
          )}
        </InputGroup>
        <InputGroup>
          <Label>Hasło</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />
          {!validPassword && (
            <ErrorMsg>Password must be at least 8 characters</ErrorMsg>
          )}
        </InputGroup>
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <Button type="submit" disabled={loginLoading}>
          {loginLoading ? "Logowanie..." : "Zaloguj się"}
        </Button>
      </FormCard>
    </LoginContainer>
  );
}
