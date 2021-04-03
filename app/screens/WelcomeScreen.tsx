import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import { NavigationProp } from "@react-navigation/core";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
interface IProps {
  navigation: NavigationProp<any>;
}

const WelcomeScreen = ({ navigation }: IProps) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={10}
    >
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Text style={styles.text}>Sell what you don't need</Text>
      <SafeAreaView
        style={{ marginBottom: 20, width: "95%", alignSelf: "center" }}
      >
        <AppButton
          color={colors.primary}
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
      </SafeAreaView>
      <SafeAreaView style={{ width: "95%", alignSelf: "center" }}>
        <AppButton
          color={colors.secondary}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
    top: 175,
    position: "absolute",
    fontWeight: "600",
    fontSize: 25,
    marginTop: 2,
  },
});

export default WelcomeScreen;
