import axios from "axios";

export const axiosInstance = () => {
  const token = typeof window !== 'undefined' ? sessionStorage.getItem('token') : null;

  return axios.create({
    baseURL: "https://body-vault-server-b9ede5286d4c.herokuapp.com/api",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `${token}` } : {}),
    },
  });
};