import apiClient from "./client";

const endpoint = "/food/nearby";

//config lat ? log

const nearbyfood = (latitude, longitude) =>
  apiClient.get(`${endpoint}?lat=${latitude}&log=${longitude}`);

export default {
  nearbyfood,
};
