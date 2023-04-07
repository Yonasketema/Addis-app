import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FoodDetailScreen from "./app/screens/FoodDetailScreen";
import HomeScreen from "./app/screens/HomeScreen";
import IntroScreen from "./app/screens/IntroScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Detail" component={FoodDetailScreen} />
  </Stack.Navigator>
);

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  return (
    <>
      {showRealApp ? (
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      ) : (
        <IntroScreen onDone={onDone} onSkip={onSkip} />
      )}
    </>
  );
}
