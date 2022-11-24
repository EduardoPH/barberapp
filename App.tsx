import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stack/MainStack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserContextProvider from './src/contexts/userContext' 

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer> 
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>

  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63C2D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
