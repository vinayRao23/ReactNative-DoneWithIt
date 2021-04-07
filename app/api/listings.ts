import apiClient from "./client";

const endpoint = "/listings";

export const getListings = (a: any, b: any, c: any) => apiClient.get(endpoint);

export const addListing = (listing: any, onUploadProgress: any) => {
  const data: any = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image: any, index: any) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return apiClient.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};
