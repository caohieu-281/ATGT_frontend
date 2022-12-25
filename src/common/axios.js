import axios from "axios";

const defaultConfig = {
  baseURL: "http://localhost:8080/",
  timeout: 100000,
};

export const createApiPjc = () => {
  const instance = axios.create(defaultConfig);
  return instance;
};

export const apiService = createApiPjc();
