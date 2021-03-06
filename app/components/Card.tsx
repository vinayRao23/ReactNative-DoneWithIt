import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";
import AppText from "./AppText";

interface IProps {
  title: string;
  subTitle: string;
  imageUrl: string;
  thumbnailUrl: string;
}

const Card = ({ title, subTitle, imageUrl, thumbnailUrl }: IProps) => {
  return (
    <SafeAreaView style={styles.card}>
      <Image
        uri={imageUrl}
        style={styles.image}
        preview={{ uri: thumbnailUrl }}
        tint="light"
      />
      <SafeAreaView style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    overflow: "hidden",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    paddingLeft: 20,
    paddingTop: 10,
  },
  subTitle: {
    marginTop: 10,
    fontWeight: "bold",
    color: colors.secondary,
    paddingLeft: 20,
    paddingBottom: 10,
  },
});

export default Card;
