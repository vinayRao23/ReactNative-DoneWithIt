import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

interface IProps {}

const AuthStack = createStackNavigator();
const AuthStackNavigator = ({}: IProps) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false, title: "Back" }}
      />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
