import { StyleSheet, View, Image, Text, StatusBar } from "react-native";
import Screen from "../components/Screen";

function FoodDetailScreen() {
  return (
    <Screen>
      <StatusBar translucent backgroundColor="rgba(0,0,0,.4)" />

      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
          }}
        ></Image>
        <View style={styles.description}>
          <Text style={styles.title}>spaghetti with spaicy mixed seaFood</Text>
          <Text style={styles.subTitle}>$100</Text>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  description: {
    marginVertical: 7,
    paddingHorizontal: 15,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#222",
    marginBottom: 10,
  },
  subTitle: {
    color: "blue",
    marginBottom: 25,
  },
});

export default FoodDetailScreen;
