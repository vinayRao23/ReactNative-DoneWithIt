import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { navigate } from "../navigation/rootNavigation";
import { registerPushToken } from "../api/expoPushTokens";

export const useNotifications = (notificationListener?: any) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) {
      Notifications.addListener(notificationListener);
    }
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      registerPushToken(token);
    } catch (error) {
      console.log("Error getting the push token", error);
    }
  };
};
