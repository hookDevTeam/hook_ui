import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import displaySpanPrimary from "../../common/styles/displaySpanPrimary";
import ProfileStyle from "./profileStyle"; // Importing the styles
import Api from "../../schemas/usersApi/src/Api.js";

export default function Profile({ route }) {
  //const answer = Api.getUserByName("dani");
  const buttonsList = [
    { name: "protfolio", id: "0" },
    { name: "accomplishments", id: "1" },
    { name: "upcoming", id: "2" },
  ];

  const screensList = ["Login", "SignUp"];

  const artistName = "Keren Laor";
  const description =
    "Keren Laor is a singer songwritter, composer, producer and a software engineer" +
    " Keren writes music in different generes: pop, rock, country, hip hop, eastern music and more" +
    "Keren was writting songs since she was 7 years old. In the age of 25 Keren started to write songs to different singers in the music industry";
  const favoritGeneres = "favorite genres: rock alternative, pop house";

  return (
    <GestureHandlerRootView>
      <View style={displaySpanPrimary.verticalContainer}>
        <Image
          source={require("./assets/images/artistpic.jpg")}
          style={displaySpanPrimary.profileImage}
        />
        <Text style={displaySpanPrimary.h1}>{route.params.data.userName}</Text>
        <Text style={displaySpanPrimary.text}>{description}</Text>
        <Text style={displaySpanPrimary.text}>{favoritGeneres}</Text>
        <Text style={displaySpanPrimary.text}>
          contact info : email: {route.params.data.email}
        </Text>
      </View>
      <FlatList
        keyExtractor={(button) => button.id}
        data={buttonsList}
        contentContainerStyle={ProfileStyle.container}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[ProfileStyle.button, { backgroundColor: "#540119" }]} // Set hex color
              onPress={() => console.log(route.params)} // Add functionality here
            >
              <Text style={ProfileStyle.buttonText}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </GestureHandlerRootView>
  );
}
