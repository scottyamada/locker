import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import Tile from "../components/Tile";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.row}>
          <View style={styles.innerRow}>
            <Tile
              onPress={() => {
                props.navigation.navigate("vault");
              }}
              style={styles.vaultStyle}
              title="The Vault"
            />
          </View>
        </View>

        <View style={styles.row2}>
          <View style={styles.innerRow2}>
            <Tile
              onPress={() => {
                props.navigation.navigate("upload");
              }}
              style={styles.uploadStyle}
              title="Upload"
            />
          </View>

          <View style={styles.innerRow2}>
            <Tile
              onPress={() => {
                props.navigation.navigate("files");
              }}
              style={styles.filesStyles}
              title="Files"
            />
          </View>
        </View>

        <View style={styles.row2}>
          <View style={styles.innerRow2}>
            <Tile
              onPress={() => {
                props.navigation.navigate("something");
              }}
              style={styles.somethingStyle}
              title="Something"
            />
          </View>

          <View style={styles.innerRow2}>
            <Tile
              onPress={() => {
                props.navigation.navigate("example");
              }}
              style={styles.exampleStyle}
              title="Example"
            />
          </View>
        </View>
        <View style={styles.innerRow2}>
          <Tile
            onPress={() => {
              props.navigation.navigate("prop");
            }}
            style={styles.propStyle}
            title="Prop"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#131313",
    // alignItems: "center",
  },
  vaultStyle: {
    borderRadius: 12,
    backgroundColor: "#039F7A",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: 10,
    height: 144,
    marginVertical: 5,
    alignItems: "center",
  },
  row2: {
    flexDirection: "row",
    flex: 1,
    // marginHorizontal: 10,
    height: 144,
    marginVertical: 5,
    justifyContent: "space-evenly",
  },
  uploadStyle: {
    borderRadius: 12,
    backgroundColor: "#AC4BBF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  filesStyles: {
    borderRadius: 12,
    backgroundColor: "#D5A00C",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  somethingStyle: {
    borderRadius: 12,
    backgroundColor: "#BB4B63",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  exampleStyle: {
    borderRadius: 12,
    backgroundColor: "#003399",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  innerRow: {
    width: "100%",
    height: "100%",
  },
  innerRow2: {
    width: 165,
    height: "100%",
    padding: 5,
    // marginVertical: 10,
    // marginHorizontal: 5,
  },
});
