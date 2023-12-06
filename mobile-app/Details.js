import React, {useContext, useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyContext from "./MyContext"; // You may need to install this library

const Details = ({ route }) => {
  const { restaurant, restaurantData, setRestaurantData} = route.params;
  const navigation = useNavigation();

  const [rating, setRating] = useState(restaurant.rating);
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  function updateItem(itemName, updatedData){
    const updatedList = restaurantData.map(item => {
      if (item.name === itemName) {
        // Update the specific item with spread operator
        return { ...item, ...updatedData };
        // Alternatively, for a shallow update, you could do:
        // return { ...item, value: updatedData.value };
      }
      return item;
    });

    // Update the state with the new list
    setRestaurantData(updatedList);
  }


  useEffect(() => {
    console.log("COMMENT: "+comment)
    // item updates using useEffect rather than a button
    updateItem(restaurant.name, {'comment':comment})


  }, [comment]);





  // const {restaurantData, setRestaurantData, num, setNum}=useContext(MyContext)
  // function postComment(comment){
  //   restaurant.comment=comment
  //   restaurantData.map(rest=>{
  //     setRestaurantData({
  //       ...restaurantData,
  //       restaurant
  //     })
  //   })
  // }




  const handleActionPress = (action) => {
    switch (action) {
      case 'Get Direction':
        // Implement Get Direction logic
        navigation.navigate('Direction', { restaurant });
        break;
      case 'Edit Post':
        // Navigate to the EditRestaurant screen
        navigation.navigate('EditRestaurant', { restaurant, restaurantData, setRestaurantData });
        break;
      case 'Share Post':
        // Implement Share Post logic
        navigation.navigate('SharePost', { restaurant });
        break;
      case 'About':
        // Implement Share Post logic
        navigation.navigate('About', { restaurant });
        break;
      default:
        break;
    }
  };

  function displayRatings(num){
    let items=[]
    for (let i=1;i<=num;i++){
      items.push(
          <Icon
              name="star"
              size={30}
              color="#FFD700"
              // onPress={() => handleRatingChange(3)}
          />
      )
    }
    return items;
  }


  return (
    <ImageBackground
      source={require('./assets/background.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon style={styles.backArrow}name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{restaurant.name}</Text>
        </View>

        <Text style={styles.sectionTitle}>Address</Text>
        <Text style={styles.address}>{restaurant.address}</Text>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{restaurant.description}</Text>

        <Text style={styles.sectionTitle}>Phone</Text>
        <Text style={styles.phone}>{restaurant.phone}</Text>

        <Text style={styles.sectionTitle}>Tags</Text>
        <Text style={styles.tag}>{restaurant.tags}</Text>
        {/* Add tags if available in your data model */}

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Ratings</Text>
          <View style={styles.ratingContainer}>

            {displayRatings(rating)}
            {/* Add more stars/icons for additional rating levels */}
          </View>
        </View>

        <TextInput
            defaultValue={restaurant.comment}
          style={styles.commentInput}
          placeholder="Add your comment..."
          onChangeText={(text) => {
            setComment(text)
          }}
          multiline
        />

        <TouchableOpacity style={styles.actionButton} onPress={() => handleActionPress('Get Direction')}>
          <Text style={styles.actionButtonText}>Get Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleActionPress('Edit Post')}>
          <Text style={styles.actionButtonText}>Edit Restaurant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleActionPress('Share Post')}>
          <Text style={styles.actionButtonText}>Share Restaurant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleActionPress('About')}>
          <Text style={styles.actionButtonText}>About</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  backArrow:{
    marginRight: 350,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: "white"
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'white'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  address: {
    fontSize: 16,
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
  phone: {
    fontSize: 16,
    marginTop: 8,
  },
  tag:{
    fontSize: 16,
    marginTop: 8,
  },
  sectionContainer: {
    marginTop: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  commentInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    paddingHorizontal: 8,
    fontSize:13,
    color:"#424242",
  },
  actionButton: {
    backgroundColor: '#3c8a5e',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  actionButtonText: {
    color: '#fff',
  },
});

export default Details;
