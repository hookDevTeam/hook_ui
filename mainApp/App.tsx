import * as React from "react";
import Jams from "./src/jams/jams";
import Profile from "./src/profile/profile";
import SignUp from "./src/signUp/signUp";
import Login from "./src/login/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UsersProfileContextProvider from "./src/store/usersProfileContext";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { Image } from "react-native";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
const accountIcon = require("./assets/icons/account.png");

const electricGuitarIcon = require("./assets/icons/guitar-electric.png");

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "front", // Valid in `screenOptions`
        drawerStyle: {
          backgroundColor: "#fff", // Optional drawer background
          width: 240, // Drawer width
        },
        drawerActiveTintColor: "#e91e63", // Active item color
        drawerItemStyle: { marginVertical: 10 }, // Styling for items
      }}
      initialRouteName="Profile"
    >
      <Drawer.Screen
        name="Profile"
        options={{
          drawerIcon: () => (
            <Image source={accountIcon} style={{ width: 24, height: 24 }} />
          ),
        }}
        component={Profile}
      />
      <Drawer.Screen
        name="Jams"
        options={{
          drawerIcon: () => (
            <Image
              source={electricGuitarIcon}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
        component={Jams}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <UsersProfileContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Main" component={DrawerNavigator} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProfileContextProvider>
  );
}
