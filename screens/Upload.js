import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import * as Firebase from "../firebase";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";

const Upload = () => {
  const [image, setImage] = useState(null);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);
    console.log(result);
  };

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
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <View>
          <TouchableOpacity onPress={uploadFiles}>
            <View style={styles.btn}>
              <Text>Upload</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={pickDocument}>
            <View style={styles.btn}>
              <Text>Choose File</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#131313",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#AC4BBF",
    padding: 12,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
