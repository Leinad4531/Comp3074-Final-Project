import React, {useState} from 'react';
import { View, Text, ImageBackground, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import MyContext from "./MyContext";
import Details from './Details';



// const MyContext=React.createContext({})
// const [restaurantData, setRestaurantData]=useState([{name:'Restaurant1', description: 'Authentic restaurant'}])




// const restaurantData = [
//   { name: 'Restaurant 1', description: 'Authentic flavors, welcoming atmosphere.' },
//   { name: 'Restaurant 2', description: 'Culinary excellence, intimate dining.' },
//   { name: 'Restaurant 3', description: 'Local ingredients, farm-to-table concept.' },
//   { name: 'Restaurant 4', description: 'Eclectic flavors, vibrant atmosphere.' },
//   { name: 'Restaurant 5', description: 'Contemporary menu, elegant surroundings.' },
//   { name: 'Restaurant 6', description: 'Classic dishes, rustic charm.' },
//   { name: 'Restaurant 7', description: 'Fusion cuisine, trendy urban setting.' },
//   { name: 'Restaurant 8', description: 'Bold flavors, stylish dining experience.' },
//   { name: 'Restaurant 9', description: 'Savor gourmet delights, cozy ambiance.' },
//
// ];

// let restaurantData=[
//   {name:'Restaurant 1', description: 'Authentic restaurant', address:'64 Main Street', phone:'413-234-0000', rating:1, comment:''},
//   { name: 'Restaurant 2', description: 'Culinary excellence, intimate dining.', address:'64 Main Street', phone:'413-234-0000', rating:1, comment:'' },
//   { name: 'Restaurant 3', description: 'Local ingredients, farm-to-table concept.', address:'64 Main Street', phone:'413-234-0000', rating:1, comment:'' },
//   { name: 'Restaurant 4', description: 'Eclectic flavors, vibrant atmosphere.', address:'64 Main Street', phone:'413-234-0000', rating:1, comment:'' },
//   { name: 'Restaurant 5', description: 'Contemporary menu, elegant surroundings.', address:'64 Main Street', phone:'413-234-0000', rating:1, comment:'' },
//   { name: 'Restaurant 6', description: 'Classic dishes, rustic charm.', address:'64 Main Street', phone:'413-234-0000', rating:1, comment:'' },
//   { name: 'Restaurant 7', description: 'Fusion cuisine, trendy urban setting.' , address:'64 Main Street', phone:'413-234-0000', rating:1, comment:''}
// ]
const RestaurantList = () => {

  // const {restaurantData}=route.params
  const [restaurantData, setRestaurantData]=useState([
    {name:'Restaurant 1', description: 'Authentic restaurant', address:'64 Main Street', phone:'413-234-0000', rating:1, tags:'', comment:''},
    { name: 'Restaurant 2', description: 'Culinary excellence, intimate dining.', address:'64 Main Street', phone:'413-234-0000', rating:1,tags:'', comment:'' },
    { name: 'Restaurant 3', description: 'Local ingredients, farm-to-table concept.', address:'64 Main Street', phone:'413-234-0000', rating:1,tags:'', comment:'' },
    { name: 'Restaurant 4', description: 'Eclectic flavors, vibrant atmosphere.', address:'64 Main Street', phone:'413-234-0000', rating:1,tags:'', comment:'' },
    { name: 'Restaurant 5', description: 'Contemporary menu, elegant surroundings.', address:'64 Main Street', phone:'413-234-0000', rating:1,tags:'', comment:'' },
    { name: 'Restaurant 6', description: 'Classic dishes, rustic charm.', address:'64 Main Street', phone:'413-234-0000', rating:1,tags:'', comment:'' },
    { name: 'Restaurant 7', description: 'Fusion cuisine, trendy urban setting.' , address:'64 Main Street', phone:'413-234-0000', rating:1,tags:'', comment:''}

  ])




  const navigation = useNavigation();
 
  return (
    <ImageBackground
      source={require('./assets/background.jpeg')}
      style={styles.backgroundImage}
    >
        <View style={styles.container}>
        <Text style={styles.mainText}>All Restaurants</Text>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#fff" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search for restaurants"
            placeholderTextColor="#fff"
          />
        </View>

          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('CreatePost', {restaurantData, setRestaurantData})}>
            <Text style={styles.buttonText}>Create Post</Text>
          </TouchableOpacity>


        {restaurantData.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.name}  // Use a unique key, in this case, the restaurant name
            onPress={() => navigation.navigate('Details', {restaurant, restaurantData, setRestaurantData})}
            style={styles.restaurantContainer}
          >
            <Text style={styles.mainText}>{restaurant.name}</Text>
            <Text style={styles.descriptionText}>{restaurant.description}</Text>
          </TouchableOpacity>
          
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 36,
    color: '#fff',
  },
  mainText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: '#fff',
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

export default RestaurantList;
