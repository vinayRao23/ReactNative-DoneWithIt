import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";

interface IProps {}

const ListingsScreen = ({}: IProps) => {
  const listings = [
    {
      id: 1,
      title: "Red Jacket",
      image: require("../assets/jacket.jpg"),
      subTitle: "$100",
    },
    {
      id: 2,
      title: "Couch in great condition",
      image: require("../assets/couch.jpg"),
      subTitle: "$1000",
    },
  ];
  return (
    <FlatList
      data={listings}
      keyExtractor={(l) => l.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});

export default ListingsScreen;
