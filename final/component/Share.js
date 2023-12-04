import * as React from 'react';
import {useState,useEffect} from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View, Image, TouchableOpacity, ActivityIndicator, TextInput, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Share() {
  // const titles = "Share Post";
  const restDetails = "Restaurant details                \u2190"
  const comment = "Choose your social media"
  const { width, height } = Dimensions.get('window')
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Details');
  };
  return (
    <ImageBackground
      source={require('../assets/bgimage.png')}
      style={{width: width, height: height+20}}
    >
    
    <ScrollView style={styles.view}>
      <Text style={styles.comment}>{comment}</Text>
      <View style={styles.logoBox}>
        <Image source={require('../assets/twitter-logo.jpeg')} style={styles.logos} />
        <Text style={styles.comment}>X</Text>
      </View>
      <View style={styles.logoBox}>
        <Image source={require('../assets/facebook-logo.jpg')} style={styles.logos} />
        <Text style={styles.comment}>Facebook</Text>
      </View>
      
      <View>
        <TouchableOpacity style={styles.subButton} onPress={handlePress}>
          <Text style={styles.buttonText}>{restDetails}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </ImageBackground>
    
  )


  
}
const styles = StyleSheet.create({
    // titles: {
    //   fontSize: 40,
    //   color: '#fff',
    //   fontWeight: 'bold',
    //   marginBottom: 5
    // },
    comment: {
      fontSize: 30,
      color: '#fff',
      marginBottom: 25
    },
    view: {
      paddingTop: 10,
      paddingLeft: 35,
      height: '100%',
      width: '100%',
    },
    subButton: {
      backgroundColor: '#2A6C6A',
      marginTop: 5,
      width: '85%',
      height: 55,
      display: 'flex',
      justifyContent: 'center',
      borderRadius: 15

    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      paddingLeft: 25
    },
    logos: {
      width: 150,
      height: 150,
      borderRadius: 100
    },
    logoBox: {
      width: '50%',
      alignItems: 'center',
    }
  })
