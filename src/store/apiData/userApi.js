import axios from "axios";
import { API_URL } from "./apiData";

export const updateMe = async (formData) => {
  const response = await axios({
    method: "PATCH",
    url: `${API_URL}/users/updateMe`,
    data: formData,
  });
  return response.data;
};

export const updatePassword = async (
  passwordCurrent,
  password,
  passwordConfirm,
) => {
  const response = await axios({
    method: "PATCH",
    url: `${API_URL}/users/updateMyPassword`,
    data: {
      passwordCurrent,
      password,
      passwordConfirm,
    },
  });
  return response.data;
};
