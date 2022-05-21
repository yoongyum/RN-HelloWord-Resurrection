import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigator from './src/navigators/HomeNavigation';


export default function App() {
  return (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
  );
}

