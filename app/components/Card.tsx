import React from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText/AppText";

interface IProps {
  title: string;
  subTitle: string;
  image: number;
}

const Card = ({ title, subTitle, image }: IProps) => {
  return (
    <SafeAreaView style={styles.card}>
      <Image source={image} style={styles.image} />
      <SafeAreaView style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
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
