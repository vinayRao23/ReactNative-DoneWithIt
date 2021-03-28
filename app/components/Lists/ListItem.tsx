import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IProps {
  title: string;
  subTitle: string;
  image: number;
  onPress?: () => void;
  renderRightActions?: () => any;
}

const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}: IProps) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <MaterialCommunityIcons
        style={styles.icon}
        name="chevron-right"
        size={30}
        color={colors.medium}
      />
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            <AppText numberOfLines={1} style={styles.subTitle}>
              {subTitle}
            </AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 15,
    paddingBottom: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    marginLeft: 20,
  },
  title: {
    fontWeight: "500",
    paddingTop: 8,
  },
  subTitle: {
    color: colors.medium,
  },
  icon: {
    left: 370,
    top: 45,
  },
});

export default ListItem;
