import React from "react";
import { Text } from "react-native";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 18,
        marginHorizontal: 20,
        marginVertical: 12,
      }}
      {...otherProps}
    >
      {children}
    </Text>
  );
}

export default AppText;
