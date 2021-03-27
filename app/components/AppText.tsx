import React from "react";
import { Text } from "react-native";
import styles from "./styles";

interface IProps {
  children: any;
  style: any;
}

const AppText = ({ children, style }: IProps) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;
