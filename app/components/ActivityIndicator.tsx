import React from "react";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible }: any) => {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/Loader.json")}
    />
  );
};

export default ActivityIndicator;
