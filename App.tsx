import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";

const App = () => {
  return (
    <View
      style={{
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="You R Fat"
        subTitle="$1,000,000"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
};

export default App;
