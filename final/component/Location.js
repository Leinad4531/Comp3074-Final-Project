import * as React from 'react';
import {useState,useEffect} from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View, Image, TouchableOpacity, ActivityIndicator, TextInput, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Location() {
  // const titles = "Location";
  const restDetails = "{restaurant name}                \u2190"
  const subTitle = "{restaurant name}"
  const { width, height } = Dimensions.get('window')
  const navigation = useNavigation();
  const restDet = () => {
    navigation.navigate('Details');
  };  
  return (
    <ImageBackground
      source={require('../assets/bgimage.png')}
      style={{width: width, height: height+20}}
    >
    
    <ScrollView style={styles.view}>
      <Text style={styles.comment}>{subTitle}</Text>
      <View>
        <Image source={require('../assets/twitter-logo.jpeg')} style={styles.logos} />
      </View>
      
      <View>
        <TouchableOpacity style={styles.subButton} onPress={restDet}>
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
      marginTop: 10,
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
      width: 320,
      height: 290,
      marginBottom: 50
    }
  })
