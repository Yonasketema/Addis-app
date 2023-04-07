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
import { AntDesign } from "@expo/vector-icons";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

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
    borderRadius: 21,
    backgroundColor: "#fff",
    overflow: "hidden",
    height: heightPercentageToDP(41),
    marginRight: 20,
    overflow: "hidden",
  },
  description: {
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: height / 4,
    marginBottom: 10,
    borderRadius: 21,
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
});
export default Card;
