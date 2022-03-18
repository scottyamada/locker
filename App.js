import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LockScreen from "./screens/LockScreen";
import Home from "./screens/Home";
import Files from "./screens/Files";
import Prop from "./screens/Prop";
import Something from "./screens/Something";
import Upload from "./screens/Upload";
import Vault from "./screens/Vault";
import Example from "./screens/Example";
import React, { useEffect } from "react";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={LockScreen}
          name="lock"
          options={{
            title: "Input PIN:",
            headerStyle: {
              backgroundColor: "#131313",
            },
            headerTintColor: "#ffffff",
          }}
        />
        <Stack.Screen
          component={Home}
          name="home"
          options={{
            title: "Welcome Back",
            headerStyle: {
              backgroundColor: "#131313",
            },
            headerTintColor: "#ffffff",
          }}
        />
        <Stack.Screen component={Files} name="files" />
        <Stack.Screen component={Prop} name="prop" />
        <Stack.Screen component={Something} name="something" />
        <Stack.Screen component={Upload} name="upload" />
        <Stack.Screen component={Vault} name="vault" />
        <Stack.Screen component={Example} name="example" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
