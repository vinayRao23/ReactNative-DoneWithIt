import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

interface IProps {
  title: string;
  onPress: () => void;
}

const AppButton = ({ title, onPress }: IProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 50,
    borderRadius: 25,
    padding: 12,
  },
  buttonText: {
    alignSelf: "center",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default AppButton;
