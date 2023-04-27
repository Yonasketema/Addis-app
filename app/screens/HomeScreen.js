import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";

import * as Location from "expo-location";

import Card from "../components/Card";
import ProCard from "../components/ProCard";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import SearchName from "../components/SearchName";
import AppText from "../components/Text";

import nearbyfoodApi from "../api/foods";

const names = ["shiro", "firir", "tibs", "enkulal", "beyeaynet", "doro"];

function HomeScreen(props) {
  const [list, setNearbyfood] = useState([]);
  const [error, setError] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState();
  const [{ latitude, longitude, granted }, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    granted: false,
  });

  const getUserLocation = async () => {
    const { granted } = await Location.requestBackgroundPermissionsAsync();
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();

    setLocation({ latitude, longitude, granted: true });
  };

  useEffect(() => {
    getUserLocation();

    if (granted) {
      loadNearbyfood({ latitude, longitude });
    }
  }, [latitude]);

  const loadNearbyfood = async ({ latitude, longitude }) => {
    setLoading(true);
    try {
      const response = await nearbyfoodApi.nearbyfood(latitude, longitude);

      setLoading(false);
      setNearbyfood(response.data.foods);
    } catch (error) {
      setLoading(false);
      setErrorMsg(error.toJSON().message);
      return setError(true);
    }

    setError(false);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Screen>
        {error && (
          <>
            <Text>{errorMsg}</Text>

            <AppText>couldn't get the data</AppText>
            <Button title="Retry " onPress={loadNearbyfood}></Button>
          </>
        )}

        <ActivityIndicator size="large" animating={loading} />
        <View
          style={{
            marginLeft: 20,
            marginVertical: 10,
          }}
        >
          <SearchBar />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={names}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <SearchName text={item} />}
          />
        </View>

        <AppText>Near By Food</AppText>

        <FlatList
          contentContainerStyle={{ marginLeft: 20, paddingRight: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={list}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <Card
              imageUri={item.menu.image}
              title={item.menu.name}
              subTitle={item.subTitle}
              restaurant={item.name}
            />
          )}
        />
        <AppText>Restaurant Near You</AppText>

        <FlatList
          contentContainerStyle={{ marginHorizontal: 20 }}
          showsHorizontalScrollIndicator={false}
          data={list}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <Card restaurant={item.name} imageUri={item.menu.image} proCard />
          )}
        />
      </Screen>
    </ScrollView>
  );
}

export default HomeScreen;
