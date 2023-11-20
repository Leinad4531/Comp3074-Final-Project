import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EditRestaurant = () => {
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [tags, setTags] = useState('');
  const [ratings, setRatings] = useState(0);

  const SaveRestaurant = () => {
    // Implement logic to create a post with the entered data
    // You can use the state variables (name, address, description, phone, tags, ratings) here
    console.log('Creating Post:', { name, address, description, phone, tags, ratings, publish });
  };
  const DeleteRestaurant = () => {
    // Implement logic to create a post with the entered data
    // You can use the state variables (name, address, description, phone, tags, ratings) here
    console.log('Creating Post:', { name, address, description, phone, tags, ratings, publish });
  };

  return (
    <ImageBackground
      source={require('./assets/background.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
      <Text style={styles.mainText}>Edit Restaurant1</Text>

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
    color: '#fff',
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
  },
});

export default EditRestaurant;
