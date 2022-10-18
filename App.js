import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import Scan from "./src/Screens/Scan";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Home}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerTitleAlign: "center",
            headerShown: true,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{
            title: "Escanear",
            headerTitleAlign: "center",
            headerShown: true,
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
