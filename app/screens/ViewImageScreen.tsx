import React, { Fragment } from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/chair.jpg")}
        />
      </SafeAreaView>
      <MaterialCommunityIcons name="close" style={styles.closeIcon} size={40} />
      <MaterialCommunityIcons
        name="trash-can-outline"
        style={styles.deleteIcon}
        size={40}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    color: colors.white,
    top: 40,
    left: 20,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    color: colors.white,
    top: 40,
    right: 5,
  },
});

export default ViewImageScreen;
