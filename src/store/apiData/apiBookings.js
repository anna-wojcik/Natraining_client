import axios from "axios";
import { API_URL } from "../apiData/apiData";

axios.defaults.withCredentials = true;

export const fetchBookings = async () => {
  const response = await axios({
    method: "GET",
    url: `${API_URL}/bookings`,
  });
  return response.data;
};

export const fetchCheckoutSession = async (trainingId) => {
  const response = await axios({
    method: "GET",
    url: `${API_URL}/bookings/checkout-session/${trainingId}`,
  });
  return response.data;
};
