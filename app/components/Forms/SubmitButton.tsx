import React from "react";
import {} from "react-native";
import { useFormikContext } from "formik";
import colors from "../../config/colors";
import AppButton from "../AppButton";

interface IProps {
  title: string;
}

const SubmitButton = ({ title }: IProps) => {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton color={colors.primary} title={title} onPress={handleSubmit} />
  );
};

export default SubmitButton;
