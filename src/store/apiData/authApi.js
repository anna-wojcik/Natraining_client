import axios from "axios";
import { API_URL } from "../apiData/apiData";

// KLUCZOWE: Wysyła i odbiera ciasteczka httpOnly
axios.defaults.withCredentials = true;

export const loginUser = async (email, password) => {
  const res = await axios({
    method: "POST",
    url: `${API_URL}/users/login`,
    data: {
      email,
      password,
    },
  });
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios({
    method: "GET",
    url: `${API_URL}/users/logout`,
  });
  return res.data;
};

export const signupUser = async (name, email, password, passwordConfirm) => {
  const resposne = await axios({
    method: "POST",
    url: `${API_URL}/users/signup`,
    data: {
      name,
      email,
      password,
      passwordConfirm,
    },
  });
  return resposne.data;
};

export const getMe = async () => {
  const response = await axios({
    method: "GET",
    url: `${API_URL}/users/me`,
  });
  return response.data;
}
