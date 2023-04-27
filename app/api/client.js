import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://192.168.1.106:8000/api/v1",
});

apiClient.get();

export default apiClient;
