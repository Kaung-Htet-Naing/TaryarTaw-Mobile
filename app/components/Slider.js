import React from 'react'
import { StyleSheet, Image, Text, View,Dimensions, FlatList,ImageBackground,TouchableOpacity } from 'react-native'
import colors from '../../constants/colors';

import songs from '../../constants/data';

const {width,height}=Dimensions.get('window')

export default function Slider() {

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
                <ImageBackground source={{uri:item.artwork}} style={styles.bannerImage}>
                  <View style={styles.textConatiner}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.artist}>{item.artist}</Text>
                  </View>
                </ImageBackground>
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
    elevation: 15,
  },
  banner: {
    height: height*20/100,
    width: width*80/100,
  },
  bannerImage: {
    height: height*20/100,
    width: '100%',
  },
  textConatiner:{
    display:'flex',
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  title:{
    color:colors.white,
    fontSize:30,
    shadowColor: colors.black,
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0.1
  },
  artist:{
    color:colors.secondary,
    fontSize:25,
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0.1
  }
})
