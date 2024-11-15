import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import loginStyle from './loginStyle';  // Importing the styles
import displaySpanPrimary from '../../common/styles/displaySpanPrimary'
import inputTextStyles from '../../common/styles/inputText';
import inputFieldStyle from '../../common/styles/inputField';
import primaryButtonStyle from '../../common/styles/primaryButton';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import this

const reducer = (state, action) => {
  switch (action.type) {
    case 'EMAIL':
      return { ...state, email: action.payload };
    case 'USERNAME':
      return { ...state, userName: action.payload };
    case 'PASSWARD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default function Login() {
  const [state, dispatch] = useReducer(reducer, { email: "", userName: "", password: "" });
  return (
    <GestureHandlerRootView style={displaySpanPrimary.verticalContainerFromStart}>
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
            value={state.email}
            maxLength={35}
            onChangeText={(text) =>
              dispatch({ type: 'EMAIL', payload: text })
            }
          />
        </View>
        <View style={inputFieldStyle.container}>
          <Text style={inputFieldStyle.label}>Enter User Name:</Text>
          <TextInput
            style={inputTextStyles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={state.userName}
            maxLength={35}
            onChangeText={(text) =>
              dispatch({ type: 'USERNAME', payload: text })
            }
          />
        </View>
        <View style={inputFieldStyle.container}>
          <Text style={inputFieldStyle.label}>Enter Passward:</Text>
          <TextInput
            style={inputTextStyles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={state.password}
            maxLength={35}
            onChangeText={(text) =>
              dispatch({ type: 'PASSWARD', payload: text })
            }
          />
        </View>
        <View style={inputFieldStyle.container}>
          <Text style={inputFieldStyle.label}>user not exist, please sign up</Text>
        </View>
      </View>
      <View style={displaySpanPrimary.verticalContainerFromStart}>
        <TouchableOpacity 
            style={primaryButtonStyle.button} // Set hex color
            onPress={() => console.log("hi")} // Add functionality here
            >
          <Text style={primaryButtonStyle.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
    
  );
}
