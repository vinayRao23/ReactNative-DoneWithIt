import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/Lists/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <AppText style={styles.title}>Red Jacket For Sale</AppText>
      <AppText style={styles.subTitle}>$100</AppText>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
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
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
