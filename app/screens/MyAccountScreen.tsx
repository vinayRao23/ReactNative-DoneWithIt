import React, { Fragment } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

interface IProps {}

const MyAccountScreen = ({}: IProps) => {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
        />
      </SafeAreaView>
      <SafeAreaView style={styles.iconContainer}>
        <Icon
          name="format-list-bulleted"
          title="My Listings"
          backgroundColor={colors.primary}
          iconColor={colors.white}
          size={50}
        />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 20,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 30,
    backgroundColor: "white",
  },
});

export default MyAccountScreen;
