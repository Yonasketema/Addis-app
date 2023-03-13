import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import Card from "../components/Card";
import ProCard from "../components/ProCard";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import SearchName from "../components/SearchName";
import AppText from "../components/Text";

const list = [
  {
    id: 1,
    imageUri:
      "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg",
    title: "spaghetti with spaicy mixed seaFood",
    subTitle: 99,
  },
  {
    id: 2,
    imageUri:
      "https://travelfoodatlas.com/wp-content/uploads/2021/04/Kitfo-2.jpg",
    title: "Beye Aynet",
    subTitle: 120,
  },
  {
    id: 3,
    imageUri:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    title: "egg vegtable ",
    subTitle: 122,
  },
  {
    id: 4,
    imageUri: "http://cdn.cnn.com/cnnnext/dam/assets/190205150343-kitfo.jpg",

    title: "Kitfo",
    subTitle: 399,
  },
  {
    id: 5,
    imageUri:
      "https://insanelygoodrecipes.com/wp-content/uploads/2021/07/Homemade-Ethiopian-Doro-Wat-Chicken-And-Egg-with-Spicy-Sauce.jpg",
    title: "Doro",
    subTitle: 299,
  },
  {
    id: 6,
    imageUri:
      "http://cdn.cnn.com/cnnnext/dam/assets/190205144959-shekla-tibs.jpg",

    title: "Shekla tibs",

    subTitle: 199,
  },
  {
    id: 7,
    imageUri:
      "https://www.2foodtrippers.com/wp-content/uploads/2019/02/Ethiopian-Food-Mixed-Plate.jpg",
    title: "droro firfir tikur enjera",
    subTitle: 234,
  },
];

const names = ["shiro", "firir", "tibs", "enkulal", "beyeaynet", "doro"];

function HomeScreen(props) {
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

        <AppText>NearBy Food</AppText>

        <FlatList
          contentContainerStyle={{ marginLeft: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              imageUri={item.imageUri}
              title={item.title}
              subTitle={item.subTitle}
            />
          )}
        />
        <AppText>Popular</AppText>

        {list.map((food) => {
          return (
            <ProCard
              key={food.id}
              imageUri={food.imageUri}
              title={food.title}
              subTitle={food.subTitle}
            />
          );
        })}
      </Screen>
    </ScrollView>
  );
}

export default HomeScreen;
