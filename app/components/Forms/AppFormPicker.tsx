import React, { Fragment } from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";
import colors from "../../config/colors";

const AppFormPicker = ({ items, name, placeholder }: any) => {
  const {
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    values,
  } = useFormikContext<any>();

  return (
    <Fragment>
      <AppPicker
        items={items}
        placeholder={placeholder}
        onBlur={() => setFieldTouched(name)}
        onSelectItem={(item: any) => setFieldValue(name, item)}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </Fragment>
  );
};

export default AppFormPicker;
