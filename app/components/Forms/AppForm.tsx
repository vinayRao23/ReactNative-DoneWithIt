import React, { Fragment } from "react";
import {} from "react-native";
import { Formik } from "formik";

interface IProps {
  initialValues: object;
  onSubmit: (values: object) => void;
  validationSchema: any;
  children: any;
}

const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: IProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <Fragment>{children}</Fragment>}
    </Formik>
  );
};

export default AppForm;
