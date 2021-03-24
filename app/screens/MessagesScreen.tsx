import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";

interface IProps {}

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = (props: IProps) => {
  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(message: any) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;
