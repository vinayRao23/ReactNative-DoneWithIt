import React, { Fragment, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Card from "../components/Card";
import { getListings } from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import ActivityIndicator from "../components/ActivityIndicator";
import { useApi } from "../hooks/useApi";
interface IProps {
  navigation: NavigationProp<any>;
}

const ListingsScreen = ({ navigation }: IProps) => {
  const { data: listings, error, loading, request: loadListings } = useApi(
    getListings
  );

  useEffect(() => {
    loadListings(1, 2, 3);
  }, []);

  return (
    <>
      {error && (
        <Fragment>
          <AppText>Couldn't Retrieve Listings</AppText>
          <AppButton
            title="Retry"
            onPress={loadListings}
            color={colors.primary}
          />
        </Fragment>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(l) => l.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Details")}
          >
            <SafeAreaView style={styles.container}>
              <Card
                title={item.title}
                subTitle={"$" + item.price}
                imageUrl={item.images[0].url}
              />
            </SafeAreaView>
          </TouchableWithoutFeedback>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: "90%",
    alignSelf: "center",
  },
});

export default ListingsScreen;
