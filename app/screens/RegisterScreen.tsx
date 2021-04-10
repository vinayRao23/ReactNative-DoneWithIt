import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Yup from "yup";
import { login, register } from "../api/auth";
import { useAuth } from "../api/useAuth";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/Forms";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const auth = useAuth();
  const [registerFailed, setRegisterFailed] = useState(false);
  const handleSubmit = async ({ email, password, name }: any) => {
    const result: any = await register(email, name, password);
    if (!result.ok) {
      return setRegisterFailed(true);
    }
    setRegisterFailed(false);
    const obj = await login(result.data.email, result.data.password);
    auth.login(obj.data);
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Account with the given email already exists."
          visible={registerFailed}
        />
        <AppFormField
          placeholder="Name"
          icon="account"
          autoCapitalize="none"
          autoCorrect={false}
          name="name"
          textContentType="name"
        />
        <AppFormField
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          placeholder="Password"
          autoCorrect={false}
          name="password"
          icon="lock"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Register" />
      </AppForm>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default RegisterScreen;
