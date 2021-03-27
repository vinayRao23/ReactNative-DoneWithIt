import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
interface IProps {
  name: any;
  size: number;
  backgroundColor: string;
  iconColor: string;
  title: any;
}

const Icon = ({ name, size, backgroundColor, iconColor, title }: IProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={name}
          size={size * 0.5}
          color={iconColor}
        />
      </View>
      <View>
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  title: {
    fontWeight: "500",
    paddingLeft: 10,
    paddingTop: "3%",
  },
});

export default Icon;
