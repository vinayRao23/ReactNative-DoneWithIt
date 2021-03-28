import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";

interface IProps {
  imageUri: string;
  onChangeImage: () => void;
}

const ImageInput = ({ imageUri, onChangeImage }: IProps) => {
  return (
    <View style={styles.container}>
      <Button title="Select Image" onPress={onChangeImage} />
      <Image source={{ uri: imageUri }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ImageInput;
