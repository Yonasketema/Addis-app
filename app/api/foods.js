import apiClient from "./client";

const endpoint =
  "/food/nearby?lat=39.51955439923884&log=9.667288506425242&foodname";

//config lat ? log

const nearbyfood = () => apiClient.get(endpoint);

export default {
  nearbyfood,
};
