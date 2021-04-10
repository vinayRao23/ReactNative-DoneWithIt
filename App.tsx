import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import OffLineNoticeBar from "./app/components/OffLineNoticeBar";
import AuthStackNavigator from "./app/navigation/AuthStackNavigator";
import AuthContext from "./app/auth/context";
import storage from "./app/auth/storage";
import AppLoading from "expo-app-loading";
import { navigationRef } from "./app/navigation/rootNavigation";

const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user: any = await storage.getUser();
    if (user) {
      setUser(user);
    }
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onError={(error) => console.log(error)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OffLineNoticeBar />
      <NavigationContainer ref={navigationRef}>
        {user ? <AppNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
