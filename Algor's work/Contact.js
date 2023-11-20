import * as React from 'react';
import {useState,useEffect} from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View, Image, TouchableOpacity, ActivityIndicator, TextInput, ImageBackground, Dimensions } from 'react-native';

export default function Contact() {
  const titles = "Contact Us";
  const dataSource = [
    {options: 'Give us a call', details: '437-221-3951'},
    {options: 'Come meet us', details: '1234 Yonge Street'},
    {options: 'Send an email', details: 'algor@georgebrown.ca'}
  ]
  const { width, height } = Dimensions.get('window');
  const renderItemFunc = ({item}) => (
    <View style={styles.first}>
      <Text style={styles.option}>{item.options}</Text>
      <Text style={styles.detail}>{item.details}</Text>
    </View>
  )
  return (
    <ImageBackground
      source={require('../assets/contactbg.png')}
      style={{width: width, height: height+20}}
    >
    <View style={styles.view}>
      <Text style={styles.titles}>{titles}</Text>
      <View>
        <FlatList
        data={dataSource}
        renderItem={renderItemFunc}
        />
      </View>
    </View>
    </ImageBackground>
    
  )


  
}
const styles = StyleSheet.create({
    titles: {
      fontSize: 40,
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: 5
    },
    view: {
      marginTop: 60,
      paddingTop: 90,
      paddingLeft: 35,
      height: '100%',
      width: '100%'
    },
    first: {
      marginBottom: 25,
    },
    option: {
      fontSize: 30,
      color: '#fff'
    },
    detail: {
      fontSize: 25,
      color: '#fff'
    }
  })
