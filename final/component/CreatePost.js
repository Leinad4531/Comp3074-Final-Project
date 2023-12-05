import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Create() {
  // const titles = 'Create Post';
  const dataSource = [
    { key: 'name', details: 'Name', placeholder: 'Enter name' },
    { key: 'address', details: 'Address', placeholder: 'Enter address' },
    { key: 'description', details: 'Description', placeholder: 'Enter description' },
    { key: 'phone', details: 'Phone', placeholder: 'Enter phone number' },
    { key: 'tags', details: 'Tags', placeholder: 'Enter tags' },
  ];
  const { width, height } = Dimensions.get('window');
  const rate = 'Rating';
  const subButton = 'Create post                         →';
  const navigation = useNavigation();
  const [postInfo, setPostInfo] = useState({
    name: '',
    address: '',
    description: '',
    phone: '',
    tags: '',
    rating: 0,
  });

  const handleInputChange = (key, value) => {
    setPostInfo((prevPostInfo) => ({
      ...prevPostInfo,
      [key]: value,
    }));
  };

  const renderItemFunc = ({ item }) => (
    <View>
      <Text style={styles.option}>{item.details}</Text>
      <TextInput
        style={styles.searchBar}
        placeholder={item.placeholder}
        placeholderTextColor="#2A6C6A"
        value={postInfo[item.key]}
        onChangeText={(text) => handleInputChange(item.key, text)}
      />
    </View>
  );

  const StarRating = ({ onRatingPress }) => {
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <TouchableOpacity key={i} onPress={() => handleInputChange('rating', i)}>
            <Text style={i <= postInfo.rating ? styles.filledStar : styles.emptyStar}>★</Text>
          </TouchableOpacity>
        );
      }
      return stars;
    };
    return <View style={styles.container}>{renderStars()}</View>;
  };

  const handleCreatePost = () => {

    const postsArray = [];
    postsArray.push(postInfo);

    setPostInfo({
      name: '',
      address: '',
      description: '',
      phone: '',
      tags: '',
      rating: 0,
    });
    navigation.navigate('List');
  };

  return (
    <ImageBackground source={require('../assets/bgimage.png')} style={{ width: width, height: height + 20 }}>
      <ScrollView style={styles.view}>
        
        <View>
          <FlatList data={dataSource} renderItem={renderItemFunc} scrollEnabled={false} />
          <Text style={styles.rate}>{rate}</Text>
          <StarRating />
          <TouchableOpacity style={styles.subButton} onPress={handleCreatePost}>
            <Text style={styles.buttonText}>{subButton}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    // titles: {
    //   fontSize: 40,
    //   color: '#fff',
    //   fontWeight: 'bold',
    //   marginBottom: 5
    // },
    view: {
      paddingTop: 10,
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
    buttonText: {
      color: '#fff',
      fontSize: 20,
      paddingLeft: 25
    }
  })
