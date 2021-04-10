import apiClient from "./client";

export const login = async (email: string, password: string) => {
  return await apiClient.post("/auth", { email, password });
};

export const register = async (
  email: string,
  name: string,
  password: string
) => {
  return await apiClient.post("/users", { email, password, name });
};
