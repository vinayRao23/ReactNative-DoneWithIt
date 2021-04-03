import React, { Fragment } from "react";
import { useFormikContext } from "formik";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

interface IProps {
  name: any;
}

const FormImagePicker = ({ name }: IProps) => {
  const { errors, setFieldValue, touched, values } = useFormikContext<any>();
  const imageUris = values[name];

  const handleAdd = (uri: any) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: any) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri: any) => imageUri !== uri)
    );
  };

  return (
    <Fragment>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </Fragment>
  );
};

export default FormImagePicker;
