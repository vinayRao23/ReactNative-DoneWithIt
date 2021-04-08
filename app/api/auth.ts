import apiClient from "./client";

export const login = async (email: string, password: string) => {
  return await apiClient.post("/auth", { email, password });
};
