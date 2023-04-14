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

import { Ionicons } from "@expo/vector-icons";
import ProCard from "./ProCard";

function Card({ imageUri, title, subTitle, proCard }) {
  const navigate = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigate.navigate("Detail")}>
      <View style={[styles.card, { width: proCard ? "100%" : width / 1.6 }]}>
        <Image
          source={{
            uri: imageUri,
          }}
          style={styles.image}
        />

        <View style={styles.description}>
          {proCard ?? (
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {title}
            </Text>
          )}

          <View style={styles.status}>
            {proCard ?? (
              <Text
                style={{ color: "#964b00", fontWeight: "700", marginBottom: 6 }}
              >
                $ {subTitle}
              </Text>
            )}

            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Ionicons name="restaurant-outline" size={15} color="#999" />
              <Text
                style={{
                  color: "#999",
                  fontWeight: "700",
                  marginBottom: 6,
                  marginLeft: 5,
                  fontSize: 14,
                }}
              >
                Habesha restaurant
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 21,
    backgroundColor: "#fff",
    overflow: "hidden",
    marginRight: 20,
    overflow: "hidden",
    marginVertical: 12,
    paddingBottom: 10,
  },
  description: {
    paddingHorizontal: 18,
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
    marginBottom: 3,
    color: "#444",
  },
  status: {},
});
export default Card;
