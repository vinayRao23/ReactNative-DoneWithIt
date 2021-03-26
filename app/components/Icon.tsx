import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText/AppText";
import colors from "../config/colors";

interface IProps {
  name: any;
  size: number;
  backgroundColor: string;
  iconColor: string;
  title: any;
}

const Icon = ({ name, size, backgroundColor, iconColor, title }: IProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons
        name={name}
        size={size}
        style={styles.backgroundColor}
        color={iconColor}
      />
      <SafeAreaView>
        <AppText style={styles.title}>{title}</AppText>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  backgroundColor: {
    backgroundColor: colors.primary,
  },
  title: {
    fontWeight: "500",
  },
});

export default Icon;
