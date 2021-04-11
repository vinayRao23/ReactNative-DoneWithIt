import Bugsnag from "@bugsnag/expo";

export const log = (error: any) => {
  return Bugsnag.notify(error);
};

export const start = () => {
  return Bugsnag.start();
};
