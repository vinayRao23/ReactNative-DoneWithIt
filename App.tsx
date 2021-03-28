import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const App = () => {
  const [imageUri, setImageUri] = useState<any>();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access this library.");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <SafeAreaView>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </SafeAreaView>
  );
};

export default App;
