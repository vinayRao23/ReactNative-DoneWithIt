import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";
import AppText from "../components/AppText";
import ListItem from "../components/Lists/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = ({ route }: any) => {
  const listing = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <AppText style={styles.title}>{listing.title}</AppText>
      <AppText style={styles.subTitle}>${listing.price}</AppText>
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
