import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../screens/MessagesScreen";
import MyAccountScreen from "../screens/MyAccountScreen";

const AccountStack = createStackNavigator();
const AccountNavigator = ({}) => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={MyAccountScreen} />
      <AccountStack.Screen name="Messages" component={MessagesScreen} />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
