import * as React from 'react';
import {useState,useEffect} from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View, Image, TouchableOpacity, ActivityIndicator, TextInput, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function List() {
  // const titles = "Edit {restaurant}";
  const dataSource = [
    {details: 'Address', placeholder: 'Enter new address'},
    {details: 'Description', placeholder: 'Enter new description'},
    {details: 'Phone', placeholder: 'Enter phone new number'},
    {details: 'Tags', placeholder: 'Enter new tags'}
  ]
  const navigation = useNavigation();
  const details = () => {
    navigation.navigate('Details');
  };
  const list = () => {
    navigation.navigate('List');
  };
  const rate = "Rating";
  const saveButton = "Save                                      →"
  const delButton = "Delete Post                          →"
  const { width, height } = Dimensions.get('window');
  const renderItemFunc = ({item}) => (
    <View>
      <Text style={styles.option}>{item.details}</Text>
      <TextInput
        style={styles.searchBar}
        placeholder={item.placeholder}
        placeholderTextColor='#2A6C6A'
        
      />
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
      <View>
        <FlatList
        data={dataSource}
        renderItem={renderItemFunc}
        scrollEnabled={false}
        />
        <Text style={styles.rate}>{rate}</Text>
        <StarRating/>
        <TouchableOpacity style={styles.subButton} onPress={details}>
          <Text style={styles.buttonText}>{saveButton}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.delButton} onPress={list}>
          <Text style={styles.buttonText}>{delButton}</Text>
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
    view: {
      marginTop: 10,
      paddingLeft: 35,
      height: '100%',
      width: '100%',
    },
    option: {
      fontSize: 30,
      color: '#fff',
      marginBottom: 3
    },
    rate: {
      fontSize: 30,
      color: '#fff'
    },
    searchBar: {
      height: 40,
      borderColor: '#fff',
      width: '90%',
      fontSize: 20,
      borderWidth: 1,
      borderRadius: 100,
      paddingLeft: 10,
      marginBottom: 16,
      backgroundColor: '#fff'
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
    delButton: {
      backgroundColor: 'red',
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
