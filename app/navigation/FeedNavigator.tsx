import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

interface IProps {}

const FeedStack = createStackNavigator();
const FeedNavigator = ({}: IProps) => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="Items"
        component={ListingsScreen}
        options={{ headerShown: false, title: "Back" }}
      />
      <FeedStack.Screen name="Details" component={ListingDetailsScreen} />
    </FeedStack.Navigator>
  );
};

export default FeedNavigator;
