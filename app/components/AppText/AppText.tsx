import React from "react";
import { Text } from "react-native";
import styles from "./styles";

interface IProps {
  children: any;
}

const AppText = ({ children }: IProps) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default AppText;
