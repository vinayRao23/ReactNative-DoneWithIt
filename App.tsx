import React, { useState } from "react";
import { SafeAreaView, Switch, Text, TextInput } from "react-native";
import AppPicker from "./app/components/AppText/AppPicker";
import AppTextInput from "./app/components/AppText/AppTextInput";

const categories: any = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

const App = () => {
  const [category, setCategory] = useState(categories[0]);

  return (
    <SafeAreaView>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item: any) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </SafeAreaView>
  );
};

export default App;
