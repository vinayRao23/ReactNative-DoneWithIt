import React, { Fragment } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/core";
import Icon from "../components/Icon";
import ListItem from "../components/Lists/ListItem";
import ListItemSeparator from "../components/Lists/ListItemSeparator";
import colors from "../config/colors";
import { useAuth } from "../api/useAuth";
interface IProps {
  navigation: NavigationProp<any>;
}

const MyAccountScreen = ({ navigation }: IProps) => {
  const { user, logout } = useAuth();

  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title={user.name}
          subTitle={user.email}
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
      <TouchableOpacity onPress={() => logout()}>
        <SafeAreaView style={styles.logoutContainer}>
          <Icon
            name="logout"
            title="Logout"
            backgroundColor={colors.warning}
            iconColor={colors.white}
            size={50}
          />
        </SafeAreaView>
      </TouchableOpacity>
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
