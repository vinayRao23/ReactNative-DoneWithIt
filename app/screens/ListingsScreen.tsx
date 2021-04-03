import React from "react";
import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Card from "../components/Card";

interface IProps {
  navigation: NavigationProp<any>;
}

const ListingsScreen = ({ navigation }: IProps) => {
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
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Details")}
        >
          <SafeAreaView style={styles.container}>
            <Card
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
            />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      )}
    />
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
