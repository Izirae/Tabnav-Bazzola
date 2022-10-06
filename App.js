import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import {  useFonts } from "expo-font";
import AppNavigator from "./src/navigation";
import { colors } from "./src/constants/themes";


export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <AppNavigator />
  );
}


