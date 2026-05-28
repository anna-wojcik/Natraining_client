import axios from "axios";
import { API_URL } from "../apiData/apiData";

axios.defaults.withCredentials = true;

export const fetchTrainings = async (page, limit) => {
  const response = await axios({
    method: "GET",
    url: `${API_URL}/trainings`,
    params: {
      page,
      limit,
    },
  });
  return response.data;
};

export const fetchSingleTraining = async (id) => {
  const response = await axios({
    method: "GET",
    url: `${API_URL}/trainings/${id}`,
  });
  return response.data;
};

export const createTraining = async (formData) => {
  const response = await axios({
    method: "POST",
    url: `${API_URL}/trainings`,
    data: formData,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const updateTraining = async ({ id, ...updateData }) => {
  const response = await axios({
    method: "PATCH",
    url: `${API_URL}/trainings/${id}`,
    data: updateData,
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const deleteTraining = async (id) => {
  const response = await axios({
    method: "DELETE",
    url: `${API_URL}/trainings/${id}`,
  });
  return response.data;
};
