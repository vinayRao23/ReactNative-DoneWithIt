import apiClient from "./client";

export const registerPushToken = (pushToken: any) => {
  return apiClient.post("/expoPushTokens", { token: pushToken });
};
