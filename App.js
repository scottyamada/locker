import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Files from "./screens/Files";
import Prop from "./screens/Prop";
import Something from "./screens/Something";
import Upload from "./screens/Upload";
import Vault from "./screens/Vault";
import Example from "./screens/Example";
import React from "react";
import { Button, SafeAreaView, Alert } from "react-native";
import { storage } from "./firebase";

export default function App() {
  const Stack = createNativeStackNavigator();

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
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
