import React from "react";
import { Text, StyleSheet } from "react-native";

interface IProps {
  children: any;
}

const AppText = ({ children }: IProps) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 20,
    fontFamily: "Avenir",
  },
});

export default AppText;
