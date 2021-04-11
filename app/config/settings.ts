import Constants from "expo-constants";

export const settings = {
  dev: {
    apiUrl: "http://192.168.86.181:9000/api/",
  },
  staging: {
    apiUrl: "http://192.168.86.181:9000/api/",
  },
  prod: {
    apiUrl: "http://192.168.86.181:9000/api/",
  },
};

export const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};
