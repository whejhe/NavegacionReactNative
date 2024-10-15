

// ./App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// import { MainStackNavigator } from "./navigation/StackNavigator";
// import BottomTabNavigator from "./navigation/TabNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer headerMode="none">
      {/* <MainStackNavigator /> */}
      {/* <BottomTabNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App


