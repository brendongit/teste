import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import Scan from "./src/Screens/Scan";
import GenerateNote from "./src/Screens/GenerateNote";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#101114" }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Home}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="Scan"
            component={Scan}
            options={{
              headerShown: false,
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="GenerateNote"
            component={GenerateNote}
            options={{
              headerShown: false,
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
