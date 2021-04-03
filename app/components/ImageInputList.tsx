import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

interface IProps {
  imageUris: Array<any>;
  onRemoveImage: (uri: any) => void;
  onAddImage: (uri: any) => void;
}

const ImageInputList = ({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}: IProps) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView as any}
        horizontal
        onContentSizeChange={() => (scrollView.current as any).scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri: any) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri: any) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
