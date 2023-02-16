// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, { useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";

//import AppIntroSlider to use it
import AppIntroSlider from "react-native-app-intro-slider";

const IntroScreen = ({ Home }) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

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

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>{Home}</SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

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
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
});

const slides = [
  {
    key: "s1",
    text: "Best Recharge offers",
    title: "Mobile Recharge",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png",
    },
    backgroundColor: "#20d2bb",
  },
  {
    key: "s2",
    title: "Flight Booking",
    text: "Upto 25% off on Domestic Flights",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png",
    },
    backgroundColor: "#febe29",
  },
  {
    key: "s3",
    title: "Great Offers",
    text: "Enjoy Great offers on our all services",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png",
    },
    backgroundColor: "#22bcb5",
  },
  {
    key: "s4",
    title: "Best Deals",
    text: " Best Deals on all our services",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png",
    },
    backgroundColor: "#3395ff",
  },
  {
    key: "s5",
    title: "Bus Booking",
    text: "Enjoy Travelling on Bus with flat 100% off",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png",
    },
    backgroundColor: "#f6437b",
  },
  {
    key: "s6",
    title: "Train Booking",
    text: " 10% off on first Train booking",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png",
    },
    backgroundColor: "#febe29",
  },
];
