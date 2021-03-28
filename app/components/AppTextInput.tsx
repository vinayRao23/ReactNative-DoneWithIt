import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const AppTextInput = ({ icon, style, ...rest }: any) => {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textInput}
        placeholderTextColor={colors.medium}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: "row",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    borderRadius: 25,
  },
  textInput: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: "Avenir",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
