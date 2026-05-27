import axios from "axios";
import { API_URL } from "./apiData";

// axios send query no matter where it send request, and always includes cookies that the backend has saved for that domain
axios.defaults.withCredentials = true;

export const fetchUsers = async ({ page, limit }) => {
  const response = await axios({
    method: "GET",
    url: `${API_URL}/users`,
    params: {
      limit,
      page,
    },
  });
  return response.data;
};

export const updateUserDataByAdmin = async ({ id, role, active }) => {
  const response = await axios({
    method: "PATCH",
    url: `${API_URL}/users/${id}`,
    data: {
      role,
      active,
    },
  });
  return response.data;
};
