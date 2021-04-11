import { create } from "apisauce";
import cache from "../utility/cache";
import storage from "../auth/storage";
import { settings } from "../config/settings";

const apiClient = create({
  baseURL: settings.dev.apiUrl,
});

apiClient.addAsyncRequestTransform(async (request: any) => {
  const authToken = await storage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get as any;
(apiClient.get as any) = async (url: any, params: any, axiosConfig: any) => {
  const response: any = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
  }
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
