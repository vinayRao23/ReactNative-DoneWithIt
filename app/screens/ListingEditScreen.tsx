import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/Forms";

interface IProps {}

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.string().nullable().required().label("Category"),
  description: Yup.string().optional().label("Description"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  { label: "Cars", value: 2, backgroundColor: "#fd9644", icon: "car" },
  { label: "Cameras", value: 3, backgroundColor: "#fed330", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "#26de81", icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
  },
  { label: "Sports", value: 6, backgroundColor: "#45aaf2", icon: "basketball" },
  {
    label: "Music & Movies",
    value: 7,
    backgroundColor: "#4b7bec",
    icon: "headphones",
  },
  { label: "Books", value: 8, backgroundColor: "#a97eec", icon: "book" },
  { label: "Other", value: 9, backgroundColor: "#8697af", icon: "note" },
];

const ListingEditScreen = ({}: IProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppForm
        initialValues={{ title: "", price: "", category: "", description: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Title"
          autoCapitalize="none"
          autoCorrect={false}
          name="title"
          textContentType="none"
        />
        <AppFormField
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
          width="25%"
          name="price"
          keyboardType="numeric"
          textContentType="none"
        />
        <AppFormPicker
          autoCapitalize="none"
          placeholder="Category"
          autoCorrect={false}
          numberOfColumns={3}
          items={categories}
          PickerItemComponent={CategoryPickerItem}
          width="50%"
          name="category"
          textContentType="none"
        />
        <AppFormField
          autoCapitalize="none"
          placeholder="Description"
          autoCorrect={false}
          name="description"
          textContentType="none"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default ListingEditScreen;
