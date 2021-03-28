import React, { Fragment } from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";

const AppFormPicker = ({
  items,
  name,
  placeholder,
  PickerItemComponent,
  width,
  numberOfColumns,
}: any) => {
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
        style={{ width }}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
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
