import { StyleSheet, View, Image, Text, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import Screen from "../components/Screen";

function FoodDetailScreen() {
  return (
    <Screen>
      <StatusBar translucent backgroundColor="rgba(0,0,0,.4)" />

      <View style={{ flex: 1 }}>
        <Image
          style={styles.image}
          source={{
            uri: "http://cdn.cnn.com/cnnnext/dam/assets/190205150343-kitfo.jpg",
          }}
        ></Image>

        <View style={styles.description}>
          <View style={styles.titlebar}>
            <Text style={styles.title} numberOfLines={2}>
              spaghetti with spaicy mixed seaFood
            </Text>
            <Text style={styles.price}>$100</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="ios-time-outline" size={24} color="black" />
            <Text style={styles.time}>10 minutes</Text>
          </View>
          <Text style={{ color: "#999", marginVertical: 5 }}>
            They had to maintain programs with millions of lines of code. Before
            they could test new changes, they had to compile the code into a
            runnable form, a process which at the time took the better part of
            an hour.
          </Text>
          <View style={{ position: "absolute", bottom: 10, right: 10 }}>
            <View
              style={{
                backgroundColor: "black",
                width: 80,
                height: 80,
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="navigation" size={40} color="#fff" />
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: heightPercentageToDP(52),
  },
  description: {
    padding: 15,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 0,
    height: heightPercentageToDP(52),
  },
  navigator: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    width: "75%",
    color: "#333",
    marginBottom: 10,
  },
  titlebar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subTitle: {
    color: "blue",
    marginBottom: 25,
  },
  price: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default FoodDetailScreen;
