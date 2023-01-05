import React from "react";
import { StyleSheet, Text } from "react-native";

function SearchNames({ text }) {
  return <Text style={styles.namebox}>{text}</Text>;
}

const styles = StyleSheet.create({
  namebox: {
    fontWeight: "400",
    fontSize: 14,
    backgroundColor: "#dedede",
    color: "#555",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 15,
    marginLeft: 10,
  },
});

export default SearchNames;
