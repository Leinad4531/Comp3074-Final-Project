import * as React from 'react';
import {useState,useEffect} from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View, Image, TouchableOpacity, ActivityIndicator, TextInput, ImageBackground, ScrollView, Dimensions } from 'react-native';

export default function Details() {
  const titles = "{restaurant}";
  const dataSource = [
    {details: 'Address', detail: '1234 Yonge Street'},
    {details: 'Description', detail: 'Very bad restaurant'},
    {details: 'Phone', detail: '437-221-3951'},
    {details: 'Tags', detail: '#thai'}
  ]
  const { width, height } = Dimensions.get('window');
  const rate = "Rating";
  const getDir = "Get direction                       →"
  const edit = "Edit post                              →"
  const share = "Share post                          →"
  const renderItemFunc = ({item}) => (
    <View>
      <Text style={styles.option}>{item.details}</Text>
      <Text style={styles.details}>{item.detail}</Text>
    </View>
  )
  const [rating, setRating] = useState(0);
  const StarRating = ({ rating, onRatingPress }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          //onPress={() => onRatingPress(i)}
        >
          <Text style={i <= rating ? styles.filledStar : styles.emptyStar}>★</Text>
        </TouchableOpacity>
      );
    }
    return stars;
  };
    return (
    <View style={styles.container}>
      {renderStars()}
    </View>
  );
};
  return (
    <ImageBackground
      source={require('../assets/bgimage.png')}
      style={{width: width, height: height+20}}
    >
    <ScrollView style={styles.view}>
      <Text style={styles.titles}>{titles}</Text>
      <View>
        <FlatList
        data={dataSource}
        renderItem={renderItemFunc}
        scrollEnabled={false}
        />
        <Text style={styles.rate}>{rate}</Text>
        <StarRating/>
        <TouchableOpacity style={styles.subButton}>
          <Text style={styles.buttonText}>{getDir}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subButton}>
          <Text style={styles.buttonText}>{edit}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subButton}>
          <Text style={styles.buttonText}>{share}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
      width: '100%',
    },
    option: {
      fontSize: 30,
      color: '#fff',
      marginBottom: 3,
      marginTop: 10
    },
    rate: {
      fontSize: 30,
      color: '#fff',
      marginTop: 10
    },
    details: {
      fontSize: 23,
      color: '#fff'
    },
    filledStar: {
      color: 'gold',
      fontSize: 40,
    },
    emptyStar: {
      color: 'gray',
      fontSize: 40,
    },
    container: {
      flexDirection: 'row'
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
    }
  })
