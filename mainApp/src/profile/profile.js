import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, TouchableOpacity, Image } from 'react-native';
import ProfileStyle from './profileStyle';  // Importing the styles
import { FlatList } from 'react-native-gesture-handler';
import { Card } from '@rneui/themed';
import displaySpanPrimary from '../../common/styles/displaySpanPrimary'
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import this

export default function Profile() {
    
  const buttonsList = [
    {name: 'protfolio', id: '1'},
    {name: 'accomplishments', id: '2'},
    {name: 'upcoming', id: '3'}
  ];

  const artistName = "Keren Laor";
  const description = "Keren Laor is a singer songwritter, composer, producer and a software engineer" + 
  " Keren writes music in different generes: pop, rock, country, hip hop, eastern music and more" +
  "Keren was writting songs since she was 7 years old. In the age of 25 Keren started to write songs to different singers in the music industry: " +
  "Kasey Cohen, Reut, Itzik Krief(Also known as Alfa). " +
  "Keren also released original songs on Spotify and Youtube."
  const favoritGeneres = "favorite genres: rock alternative, pop house"

  return (
    <GestureHandlerRootView>
      <View style={displaySpanPrimary.verticalContainer}>
        <Text style={displaySpanPrimary.h1}>{artistName}</Text>
        <Text style={displaySpanPrimary.text}>
          {description}
        </Text>
        <Text style={displaySpanPrimary.text}>{favoritGeneres}</Text>
      </View>
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
