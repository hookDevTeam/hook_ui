import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View, FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import displaySpanPrimary from "../../common/styles/displaySpanPrimary";
import ProfileStyle from "./profileStyle"; // Importing the styles
import { UserProfileContext } from "../store/usersProfileContext";
import { UserProfile } from "../../schemas/usersApi/src/Api";

export default function Profile() {
  //const answer = Api.getUserByName("dani");
  const usersProfileContext = useContext(UserProfileContext);
  const user: UserProfile = usersProfileContext.user;
  console.log("user is");
  console.log(user);
  const buttonsList = [
    { name: "protfolio", id: "0" },
    { name: "accomplishments", id: "1" },
    { name: "upcoming", id: "2" },
  ];

  const screensList = ["Login", "SignUp"];
  const artistPic = require("./assets/images/artistpic.jpg");

  return (
    <GestureHandlerRootView>
      <View style={displaySpanPrimary.verticalContainer}>
        <Image source={artistPic} style={displaySpanPrimary.profileImage} />
        <Text style={displaySpanPrimary.h1}>{user.userName}</Text>
        <Text style={displaySpanPrimary.text}>{user.descriptions}</Text>
        <Text style={displaySpanPrimary.text}>{user.favoriteGeneres}</Text>
        <Text style={displaySpanPrimary.text}>
          contact info : email: {user.email}
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
              onPress={() => console.log(user)} // Add functionality here
            >
              <Text style={ProfileStyle.buttonText}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </GestureHandlerRootView>
  );
}
