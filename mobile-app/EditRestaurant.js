import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native";

const EditRestaurant = ({ route }) => {
  const navigation=useNavigation();
  const {restaurantData, restaurant, setRestaurantData}=route.params



  const [name, setName]=useState(restaurant.name)
  const [address, setAddress] = useState(restaurant.address);
  const [description, setDescription] = useState(restaurant.description);
  const [phone, setPhone] = useState(restaurant.phone);
  const [tags, setTags] = useState(restaurant.tags);
  const [ratings, setRatings] = useState(restaurant.rating);

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

  const deleteItemByName = (nameToDelete) => {
    const updatedList = restaurantData.filter(item => item.name !== nameToDelete);
    setRestaurantData(updatedList);
  };


  const SaveRestaurant = () => {
    // Implement logic to create a post with the entered data
    // You can use the state variables (name, address, description, phone, tags, ratings) here
    console.log('Editting Post:', { name, address, description, phone, tags, ratings });
    try {
      updateItem(restaurant.name, {
        'name': name,
        'description': description,
        'address': address,
        'phone': phone,
        'rating': ratings,
        'tags':tags
      })
    }catch (e) {
      console.log(e)
    }
    navigation.navigate('RestaurantList')
  };
  const DeleteRestaurant = () => {
    // Implement logic to create a post with the entered data
    // You can use the state variables (name, address, description, phone, tags, ratings) here
    console.log('deleting Post:', { name, address, description, phone, tags, ratings });
    try {
      deleteItemByName(restaurant.name)
    }
    catch (e){
      console.log(e)
    }
    navigation.navigate('RestaurantList')
  };

  return (
    <ImageBackground
      source={require('./assets/background.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
      <Text style={styles.mainText}>Edit {restaurant.name}</Text>

        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={(text) => setAddress(text)}
          placeholder="Enter address"
        />

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder="Enter description"
        />

        <Text style={styles.label}>Phone:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
          placeholder="Enter phone number"
        />

        <Text style={styles.label}>Tags:</Text>
        <TextInput
          style={styles.input}
          value={tags}
          onChangeText={(text) => setTags(text)}
          placeholder="Enter tags"
        />

        <Text style={styles.label}>Ratings:</Text>
        <View style={styles.ratingsContainer}>
          {[1, 2, 3, 4, 5].map((index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setRatings(index)}
            >
              <Icon
                name={ratings >= index ? 'star' : 'star-outline'}
                size={30}
                color="#FFD700"
                style={styles.starIcon}
              />
            </TouchableOpacity>
          ))}
        </View>


        <TouchableOpacity style={styles.button} onPress={SaveRestaurant}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={DeleteRestaurant}>
          <Text style={styles.buttonText}>Delete</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 16,
    marginTop: 8,
    color: '#000000',
    backgroundColor:'white'
  },
  mainText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  ratingsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  starIcon: {
    marginRight: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default EditRestaurant;
