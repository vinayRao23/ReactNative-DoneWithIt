import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <AppText style={styles.title}>Red Jacket For Sale</AppText>
      <AppText style={styles.subTitle}>$100</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    padding: 20,
    fontSize: 24,
  },
  subTitle: {
    fontSize: 18,
    paddingLeft: 20,
    bottom: 15,
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default ListingDetailsScreen;
