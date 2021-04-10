import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Notifications1 from "expo-notifications";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import NewListingButton from "./NewListingButton";
import { registerPushToken } from "../api/expoPushTokens";
import { navigate } from "./rootNavigation";

const AppTab = createBottomTabNavigator();
const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotifications();

    Notifications.addListener((notification: any) => {
      navigate("Account", "");
    });
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications1.getExpoPushTokenAsync();
      registerPushToken(token);
    } catch (error) {
      console.log("Error getting the push token", error);
    }
  };

  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        labelPosition: "below-icon",
      }}
    >
      <AppTab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <AppTab.Screen
        name="+"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton onPress={() => navigation.navigate("+")} />
          ),
          tabBarIcon: ({ size, color }) => (
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="plus-circle"
                size={size}
                color={color}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <AppTab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AppNavigator;
