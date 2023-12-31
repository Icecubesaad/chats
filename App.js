import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ChatStackNavigator from './src/navigations/Navigator';
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold
} from '@expo-google-fonts/montserrat';
import { ActivityIndicator } from 'react-native'


const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />
  }
  return (
    <NavigationContainer>
      <ChatStackNavigator />
    </NavigationContainer>
  )
}
export default App;