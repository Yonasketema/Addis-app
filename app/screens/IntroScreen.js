import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "s1",
    title: "Addis Food & Restorant",
    text: "Enjoy Great offers on our all services",
    image: require("./../assets/4ufood.png"),
    backgroundColor: "#DDD",
  },
];

const RenderItem = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: item.backgroundColor,
        alignItems: "center",
        justifyContent: "space-around",
        paddingBottom: 100,
      }}
    >
      <Text style={styles.introTitleStyle}>{item.title}</Text>
      <Image style={styles.introImageStyle} source={item.image} />
      <Text style={styles.introTextStyle}>{item.text}</Text>
    </View>
  );
};

function IntroScreen({ onDone, onSkip }) {
  return (
    <AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      onDone={onDone}
      showSkipButton={true}
      onSkip={onSkip}
    />
  );
}

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },

  introImageStyle: {
    width: "100%",
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "#000",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
});
