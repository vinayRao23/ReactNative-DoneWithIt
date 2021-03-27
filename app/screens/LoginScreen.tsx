import React, { Fragment } from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppText/AppTextInput";
import { Formik } from "formik";
import * as Yup from "yup";
import colors from "../config/colors";
import AppText from "../components/AppText/AppText";

interface IProps {}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = ({}: IProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <Fragment>
            <AppTextInput
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              onChangeText={handleChange("email")}
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppText style={{ color: "red" }}>{errors.email}</AppText>
            <AppTextInput
              autoCapitalize="none"
              placeholder="Password"
              autoCorrect={false}
              onChangeText={handleChange("password")}
              icon="lock"
              textContentType="password"
              secureTextEntry
            />
            <AppText style={{ color: "red" }}>{errors.password}</AppText>
            <AppButton
              color={colors.primary}
              title="Login"
              onPress={handleSubmit}
            />
          </Fragment>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
});

export default LoginScreen;
