import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import SignUpStyle from './signUpStyle';  // Importing the styles

export default function SignUp() {
  return (
    <View style={SignUpStyle.container}>
      <Text style={SignUpStyle.text}>Open up App.js to start working on your app!</Text>
      <Text style={SignUpStyle.text}>sign up</Text>
      <StatusBar style="auto" />
    </View>
  );
}
