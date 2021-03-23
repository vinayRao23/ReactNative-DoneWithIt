import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

interface IProps {
  children: any;
}

const AppText = ({ children }: IProps) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
