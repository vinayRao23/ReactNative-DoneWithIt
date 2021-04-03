import React, { Fragment } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/core";
import Icon from "../components/Icon";
import ListItem from "../components/Lists/ListItem";
import ListItemSeparator from "../components/Lists/ListItemSeparator";
import colors from "../config/colors";
interface IProps {
  navigation: NavigationProp<any>;
}

const MyAccountScreen = ({ navigation }: IProps) => {
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
        <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
          <Icon
            name="email"
            title="My Messages"
            backgroundColor={colors.secondary}
            iconColor={colors.white}
            size={50}
          />
        </TouchableOpacity>
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
