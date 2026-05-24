import axios from "axios";
import { API_URL } from "../apiData/apiData";

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
