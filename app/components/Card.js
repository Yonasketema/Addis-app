import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

function Card({ imageUri, title, subTitle }) {
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
        <View style={styles.like_box}>
          <AntDesign name="heart" size={20} color="red" />
          <Text style={{ color: "#fff", marginLeft: 5 }}>1123</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>

          <View style={styles.status}>
            <Text style={styles.title}>$ {subTitle}</Text>

            <AntDesign name="hearto" size={24} color="black" />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width / 1.7,
    borderRadius: 15,
    backgroundColor: "#fff",
    overflow: "hidden",
    height: 250,
    marginRight: 20,
  },
  description: {
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: height / 4,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 10,
    minHeight: 40,
    color: "#444",
  },
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  like_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 10,
    borderRadius: 10,
  },
});
export default Card;
