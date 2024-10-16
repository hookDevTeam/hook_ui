import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, Text, View, TouchableOpacity } from 'react-native';
import ProfileStyle from './profileStyle';  // Importing the styles
import { FlatList } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import this

export default function Profile() {
    
  const buttonsList = [
    {name: 'protfolio', id: '1'},
    {name: 'accomplishments', id: '2'},
    {name: 'upcoming', id: '3'}
  ];

  return (
    <GestureHandlerRootView>
        <FlatList
        keyExtractor={button => button.id}
        data={buttonsList}
        contentContainerStyle={ProfileStyle.container}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity 
                  style={[ProfileStyle.button, { backgroundColor: '#540119' }]} // Set hex color
                  onPress={() => alert(item.name)} // Add functionality here
                >
                  <Text style={ProfileStyle.buttonText}>{item.name}</Text>
                </TouchableOpacity>
              );
        }}/>
    </GestureHandlerRootView>
  );
}
