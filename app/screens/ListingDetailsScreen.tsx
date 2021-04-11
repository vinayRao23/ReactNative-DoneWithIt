import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";
import * as Yup from "yup";
import { Notifications } from "expo";
import { sendMessage } from "../api/sendMessage";
import AppText from "../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
import ListItem from "../components/Lists/ListItem";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().label("Message"),
});

const ListingDetailsScreen = ({ route }: any) => {
  const listing = route.params;
  const handleSubmit = async ({ message }: any, { resetForm }: any) => {
    try {
      await sendMessage(message, listing.id);
      resetForm();
      Notifications.presentLocalNotificationAsync({
        title: "Fatty",
        body: "FATTY",
      });
    } catch (error) {
      console.log("OOF", error);
    }
  };
  return (
    <Fragment>
      <View style={styles.container}>
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
          uri={listing.images[0].url}
        />
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subTitle}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
        <AppForm
          onSubmit={handleSubmit as any}
          initialValues={{ message: "" }}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="message"
            width={"90%"}
            placeholder="Send Message to Seller"
            style={{ alignSelf: "center" }}
          />
          <View>
            <SubmitButton title="Contact Seller" />
          </View>
        </AppForm>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    padding: 20,
    fontSize: 24,
  },
  subTitle: {
    fontSize: 18,
    paddingLeft: 20,
    bottom: 15,
    color: colors.secondary,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
