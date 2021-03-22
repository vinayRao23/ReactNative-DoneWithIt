import React, { Fragment } from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";

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
      <SafeAreaView style={styles.closeIcon} />
      <SafeAreaView style={styles.deleteIcon} />
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
    backgroundColor: "#000",
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;
