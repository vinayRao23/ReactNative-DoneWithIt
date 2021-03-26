import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import colors from "./app/config/colors";
import Icon from "./app/components/Icon";
import ListingsScreen from "./app/screens/ListingsScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <ListingsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 20,
    paddingTop: 100,
    flex: 1,
  },
});

export default App;
