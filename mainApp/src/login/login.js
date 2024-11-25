import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import this
import displaySpanPrimary from "../../common/styles/displaySpanPrimary";
import inputFieldStyle from "../../common/styles/inputField";
import inputTextStyles from "../../common/styles/inputText";
import primaryButtonStyle from "../../common/styles/primaryButton";

export default function Login({ navigation }) {
  const [user, setUser] = useState({ userName: "", email: "", password: "" });
  const profileScreen = "Profile";
  return (
    <GestureHandlerRootView
      style={displaySpanPrimary.verticalContainerFromStart}
    >
      <View style={displaySpanPrimary.verticalContainerFromStart}>
        <View style={inputFieldStyle.container}>
          <Text style={displaySpanPrimary.h1}>Login To Hook</Text>
        </View>
        <View style={inputFieldStyle.container}>
          <Text style={inputFieldStyle.label}>Enter Email:</Text>
          <TextInput
            style={inputTextStyles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={user.email}
            maxLength={35}
            onChangeText={(text) => {
              setUser((prevUser) => ({
                ...prevUser,
                email: text,
              }));
            }}
          />
        </View>
        <View style={inputFieldStyle.container}>
          <Text style={inputFieldStyle.label}>Enter User Name:</Text>
          <TextInput
            style={inputTextStyles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={user.userName}
            maxLength={35}
            onChangeText={(text) => {
              setUser((prevUser) => ({
                ...prevUser,
                userName: text,
              }));
            }}
          />
        </View>
        <View style={inputFieldStyle.container}>
          <Text style={inputFieldStyle.label}>Enter Passward:</Text>
          <TextInput
            style={inputTextStyles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={user.password}
            maxLength={35}
            onChangeText={(text) => {
              setUser((prevUser) => ({
                ...prevUser,
                password: text,
              }));
            }}
          />
        </View>
        <View style={inputFieldStyle.container}>
          <Text style={inputFieldStyle.label}>
            user not exist, please sign up
          </Text>
        </View>
      </View>
      <View style={displaySpanPrimary.verticalContainerFromStart}>
        <TouchableOpacity
          style={primaryButtonStyle.button} // Set hex color
          onPress={() => {
            console.log(user);
            navigation.navigate(profileScreen, { data: user });
          }} // Add functionality here
        >
          <Text style={primaryButtonStyle.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}
