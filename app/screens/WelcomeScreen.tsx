import React, { Fragment } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Text,
} from "react-native";

const WelcomeScreen = () => {
  return (
    <Fragment>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.text}>Sell what you don't need</Text>
        <SafeAreaView style={styles.loginButton}></SafeAreaView>
        <SafeAreaView style={styles.registerButton}></SafeAreaView>
      </ImageBackground>
    </Fragment>
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
  },
  loginButton: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fc5c65",
    height: 70,
    justifyContent: "flex-end",
  },
  registerButton: {
    height: 70,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#4ecdc4",
    justifyContent: "flex-end",
  },
});

export default WelcomeScreen;
