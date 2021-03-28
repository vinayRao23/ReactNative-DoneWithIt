import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const AppText = ({ children, style, ...rest }: any) => {
  return (
    <Text {...rest} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export default AppText;
