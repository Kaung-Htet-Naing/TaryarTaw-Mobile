import React from 'react'
import {  Image,StyleSheet, Text, View ,Dimensions} from 'react-native'
import { ActivityIndicator } from 'react-native';

const {width,height}=Dimensions.get("window")

export default function WelcomScreen() {


  return (
    <View style={styles.container}>
      <Image
        source={ require('../../assets/img/logo.png') }
        PlaceholderContent={<ActivityIndicator />}
        style={styles.image}
      />
      <Text style={styles.text}>Tayar Taw Music Platform</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    width:width*58/100,
    height:height*30/100
  },
  text:{
    color:'grey',
    fontSize:15,
    letterSpacing:3,
    position:'absolute',
    bottom:30,
  }
})
