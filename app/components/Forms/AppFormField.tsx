import React, { Fragment } from "react";
import {} from "react-native";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, ...rest }: any) => {
  const {
    handleChange,
    setFieldTouched,
    errors,
    touched,
  } = useFormikContext<any>();

  return (
    <Fragment>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </Fragment>
  );
};

export default AppFormField;
