import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import loginStyle from './loginStyle';  // Importing the styles

export default function Login() {
  return (
    <View style={loginStyle.container}>
      <Text style={loginStyle.text}>Open up App.js to start working on your app!</Text>
      <Text style={loginStyle.text}>hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}
