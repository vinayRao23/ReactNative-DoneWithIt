import React, { Fragment } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/Lists/ListItem";
import ListItemSeparator from "../components/Lists/ListItemSeparator";
import colors from "../config/colors";

const MyAccountScreen = () => {
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
        <ListItemSeparator />
        <Icon
          name="email"
          title="My Messages"
          backgroundColor={colors.secondary}
          iconColor={colors.white}
          size={50}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.logoutContainer}>
        <Icon
          name="logout"
          title="Logout"
          backgroundColor={colors.warning}
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
  logoutContainer: {
    marginTop: 30,
    backgroundColor: "white",
  },
  iconContainer: {
    marginTop: 30,
    backgroundColor: "white",
  },
});

export default MyAccountScreen;
