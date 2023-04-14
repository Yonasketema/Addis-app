import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

function ProCard({ imageUri, title, subTitle }) {
  const navigate = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigate.navigate("Detail")}>
      <View style={styles.card}>
        <Image
          source={{
            uri: imageUri,
          }}
          style={styles.image}
        />
        <View style={styles.title_container}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: widthPercentageToDP(100),
    backgroundColor: "#fff",
    overflow: "hidden",
    height: heightPercentageToDP(21),

    marginVertical: 10,
    marginHorizontal: 20,
    elevation: 7,
  },
  description: {
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: height / 4,
    resizeMode: "cover",
    marginBottom: 10,
  },
  title_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 13,
    left: 13,
    width: "75%",
    padding: 10,
    borderRadius: 10,
    // backgroundColor: "rgba(7,21,19,.3)",
  },
  title: {
    fontSize: 18,
    color: "#f4f8f8",
    fontWeight: "bold",
  },
});
export default ProCard;
