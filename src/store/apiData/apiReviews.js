import axios from "axios";
import { API_URL } from "./apiData";

axios.defaults.withCredentials = true;

export const fetchAllReviews = async ({ page, limit }) => {
  const response = await axios({
    method: "GET",
    url: `${API_URL}/reviews`,
    params: { page, limit },
  });
  return response.data;
};

export const updateReviewByAdmin = async ({ id, review, rating }) => {
  const response = await axios({
    method: "PATCH",
    url: `${API_URL}/reviews/${id}`,
    data: { review, rating: Number(rating) },
  });
  return response.data;
};
