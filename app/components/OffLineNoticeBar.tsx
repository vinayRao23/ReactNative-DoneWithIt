import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import AppText from "./AppText";
import colors from "../config/colors";

const OffLineNoticeBar = ({}: any) => {
  const netInfo = useNetInfo();
  if (netInfo.isInternetReachable === false && netInfo.type !== "unknown") {
    return (
      <SafeAreaView style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </SafeAreaView>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
  },
  text: {
    alignSelf: "center",
    fontFamily: "Avenir",
    color: colors.white,
    fontSize: 25,
  },
});

export default OffLineNoticeBar;
