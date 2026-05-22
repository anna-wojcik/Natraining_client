import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSettingsRequest } from "../../store/slices/authSlice";
import {
  SettingsWrapper,
  FormCard,
  CardHeader,
  FormGrid,
  InputGroup,
  Label,
  Input,
  SaveButton,
  PhotoUploadSection,
  UserAvatar,
  UploadLabel,
  ErrorText,
} from "./styled";
import { isValidField, regexName, regexEmail } from "../../regex";

export default function Settings() {
  const dispatch = useDispatch();
  const {
    user,
    loading,
    error: serverError,
  } = useSelector((state) => state.auth);

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(
    `http://localhost:3000/img/users/${user?.photo}`,
  );

  const [passwordCurrent, setPasswordCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [errors, setErrors] = useState({});

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSaveData = (e) => {
    e.preventDefault();

    const form = new FormData();
    const localErrors = {};

    if (
      name.length < 3 ||
      !name.length > 40 ||
      !isValidField(regexName, name)
    ) {
      localErrors.name = "Minimum 3-40 letters";
    }
    if (!isValidField(regexEmail, email)) {
      localErrors.email = "Invalid email address";
    }
    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      return;
    }
    setErrors({});

    form.append("name", name);
    form.append("email", email);
    if (photo) form.append("photo", photo);

    dispatch(updateSettingsRequest({ type: "data", data: form }));
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    const localErrors = {};

    if (password.length < 8) {
      localErrors.password = "Password must be at least 8 characters.";
    }
    if (password !== passwordConfirm) {
      localErrors.passwordConfirm =
        "Password confirm must be the same as password.";
    }

    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      return;
    }

    setErrors({});
    dispatch(
      updateSettingsRequest({
        type: "password",
        data: { passwordCurrent, password, passwordConfirm },
        clearPasswordFields: () => {
          setPasswordCurrent("");
          setPassword("");
          setPasswordConfirm("");
        },
      }),
    );
  };

  return (
    <SettingsWrapper>
      <h2>Settings</h2>
      {serverError && (
        <ErrorText style={{ fontSize: "15px", marginBottom: "15px" }}>
          {serverError}
        </ErrorText>
      )}

      <FormCard onSubmit={handleSaveData}>
        <CardHeader>
          <h3>Personal Data</h3>
          <SaveButton type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </SaveButton>
        </CardHeader>

        <FormGrid>
          <InputGroup>
            <Label>Fullname</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value.trim())}
              required
              $hasError={!!errors.name}
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              required
              $hasError={!!errors.email}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </InputGroup>
        </FormGrid>

        <PhotoUploadSection>
          <UserAvatar src={photoPreview} alt="User photo" />
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: "none" }}
          />
          <UploadLabel htmlFor="photo">Choose new photo</UploadLabel>
        </PhotoUploadSection>
      </FormCard>

      <FormCard onSubmit={handleSavePassword} style={{ marginTop: "30px" }}>
        <CardHeader>
          <h3>Security</h3>
          <SaveButton type="submit" disabled={loading}>
            {loading ? "Changing..." : "Change Password"}
          </SaveButton>
        </CardHeader>

        <InputGroup style={{ marginBottom: "15px" }}>
          <Label>Current password *</Label>
          <Input
            type="password"
            placeholder="••••••••"
            value={passwordCurrent}
            onChange={(e) => setPasswordCurrent(e.target.value.trim())}
            required
          />
        </InputGroup>

        <FormGrid>
          <InputGroup>
            <Label>New password *</Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
              required
              $hasError={!!errors.password}
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <Label>Confirm new password *</Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value.trim())}
              required
              $hasError={!!errors.passwordConfirm}
            />
            {errors.passwordConfirm && (
              <ErrorText>{errors.passwordConfirm}</ErrorText>
            )}
          </InputGroup>
        </FormGrid>
      </FormCard>
    </SettingsWrapper>
  );
}
