import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import NewListingButton from "./NewListingButton";

const AppTab = createBottomTabNavigator();
const AppNavigator = () => {
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
