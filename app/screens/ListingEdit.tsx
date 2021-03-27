import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Yup from "yup";
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

const ListingEdit = ({}: IProps) => {
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
          name="price"
          keyboardType="numeric"
          textContentType="none"
        />
        <AppFormPicker
          autoCapitalize="none"
          placeholder="Category"
          autoCorrect={false}
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

export default ListingEdit;
