import React, { useContext, useState } from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";
import {
  AppFormField,
  SubmitButton,
  AppForm,
  ErrorMessage,
} from "../components/Forms";
import { login } from "../api/auth";
import colors from "../config/colors";
import AuthContext from "../auth/context";
import storage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }: any) => {
    const result: any = await login(email, password);
    if (!result.ok) {
      return setLoginFailed(true);
    }
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    authContext.setUser(user);
    storage.storeToken(result.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <ErrorMessage
        error="Invalid email and/or password."
        visible={loginFailed}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
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
        <SubmitButton title="login" />
      </AppForm>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
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
