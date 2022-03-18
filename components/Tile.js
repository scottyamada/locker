import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Tile = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <View>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Tile;

const styles = StyleSheet.create({});
