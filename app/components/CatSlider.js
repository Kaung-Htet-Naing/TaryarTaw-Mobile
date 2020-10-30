import React from 'react'
import { StyleSheet, Image, Text, View,Dimensions, FlatList,ImageBackground,TouchableOpacity } from 'react-native'

import  colors  from '../../constants/colors';
import songs from '../../constants/data';

const {width,height}=Dimensions.get('window')

export default function CatSlider() {

  separator = () => {
    return <View style={{width: 20, backgroundColor: '#fff'}} />;
  };

  return (
    <View style={styles.container}>
        <FlatList
          data={songs}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => this.separator()}
          renderItem={({item, index}) => {
            return (
              <View style={styles.banner} key={index}>
                <Image source={{uri:item.artwork}} style={styles.bannerImage}/>
                <Text>{item.title}</Text>
                <Text>{item.artist}</Text>
              </View>
            );
          }}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:height*20/100,
    backgroundColor:colors.white
  },
  banner: {
    height: height*15/100,
    width: width*30/100,
  },
  bannerImage: {
    height: height*15/100,
    width:'100%'
  },
  textConatiner:{
    display:'flex',
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  title:{
    color:colors.black,
    fontSize:30,
    shadowColor: "#000",
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0.1
  },
  artist:{
    color:'#ba2025',
    fontSize:25,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0.1
  }
})
