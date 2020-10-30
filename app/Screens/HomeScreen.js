import React from 'react'
import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import Slider from '../components/Slider'
import Icon from 'react-native-vector-icons/MaterialIcons';
import CatSlider from '../components/CatSlider';
import colors from '../../constants/colors';

const {width,height}=Dimensions.get('window')


export default function HomeScreen() {

  const Separator = () => {
    return <View style={{height: 20, backgroundColor: '#fff'}} />;
  };

  return (
    <View>
      <View style={styles.accountContainer}>
        <Icon name="account-circle" size={30} style={styles.account}/>
      </View>
      <Text style={styles.titile}>Tayar Taw</Text>
      <Separator/>
      <Slider/>
      <Separator/>
      <Text style={styles.subtitle}>မကြာသေးခင်ကကြည့်ရှုထားသော</Text>
      <CatSlider/>
    </View>
  )
}

const styles = StyleSheet.create({
   accountContainer:{
    height:height*5/100
  },
  account:{
    position:'absolute',
    top:5,
    right:20
  },
  titile:{
    textTransform:'uppercase',
    height:height*5/100,
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  },
  subtitle:{
    marginBottom:5,
    color:colors.primary,
    fontSize:16,
    fontWeight:'bold',textShadowColor: colors.black,
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.1
  }
})
