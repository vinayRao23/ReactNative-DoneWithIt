import apiClient from "./client";

export const sendMessage = (message: string, listingId: string) => {
  return apiClient.post("/messages", {
    message,
    listingId,
  });
};
