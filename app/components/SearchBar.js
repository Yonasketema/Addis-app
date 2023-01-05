import React from "react";
import { TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function SearchBar({ placeholder }) {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        marginVertical: 7,
      }}
    >
      <AntDesign name="search1" size={24} color="black" />
      <TextInput
        placeholder="What would you like to eat?"
        style={{ marginHorizontal: 10 }}
      />
    </View>
  );
}

export default SearchBar;
