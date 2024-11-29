import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./src/profile/profile";
import SignUp from "./src/signUp/signUp";
import Login from "./src/login/login";
import UsersProfileContextProvider from "./src/store/usersProfileContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UsersProfileContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProfileContextProvider>
  );
}
