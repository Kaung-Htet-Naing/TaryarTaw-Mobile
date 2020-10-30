import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';

import { Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import WelcomScreen from './app/Screens/WelcomScreen';
import HomeScreen from './app/Screens/HomeScreen';

const {width,height}=Dimensions.get('window')

const App =() => {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding:width*5/100
  }
});

export default App;
