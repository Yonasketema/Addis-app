import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function LikeBox(props) {
  return (
    <View style={styles.like_box}>
      <AntDesign name="heart" size={20} color="red" />
      <Text style={{ color: "#fff", marginLeft: 5 }}>1123</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  like_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(7,21,19,0.3)",
    padding: 10,
    borderRadius: 10,
  },
});

export default LikeBox;
