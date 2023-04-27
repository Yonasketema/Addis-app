import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
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

  useEffect(() => {
    loadNearbyfood();
  }, []);

  const loadNearbyfood = async () => {
    const response = await nearbyfoodApi.nearbyfood();
    setNearbyfood(response.data.foods);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Screen>
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
