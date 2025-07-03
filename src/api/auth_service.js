import axiosInstance from "./axios_instance";

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post("Login", credentials);
  return response.data;
};
