import React, { useEffect, useState } from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

const Direction = ({ route }) => {
  const { restaurant } = route.params;
  const [address, setAddress] = useState(restaurant.address);
  const navigation = useNavigation();

  const [location, setLocation] = useState({
    longitude: -79.4096960,
    latitude: 43.6796272,
  });

  const [routeCoordinates, setRouteCoordinates] = useState([]);

  const getLocationFromAddress = async () => {
    try {
      const geoLocation = await Location.geocodeAsync(address);
      if (geoLocation && geoLocation.length > 0) {
        setLocation(geoLocation[0]);
        setRouteCoordinates([
          { latitude: location.latitude, longitude: location.longitude },
          { latitude: geoLocation[0].latitude, longitude: geoLocation[0].longitude },
        ]);
      }
    } catch (error) {
      console.error('Error fetching location: ', error);
    }
  };

  useEffect(() => {
    getLocationFromAddress();
  }, [address]);

  const handleBackToDetails = () => {
    // Navigate back to the DetailScreen
    navigation.goBack();
  };

  const handleGetDirections = () => {
    const { latitude, longitude } = location;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <ImageBackground
      source={require('./assets/background.jpeg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Restaurant Map */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* Marker for the restaurant */}
          <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />

          {/* Polyline to show the route */}
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#3498db"
            strokeWidth={10}
          />
        </MapView>

        {/* Button to get directions */}
        <TouchableOpacity style={styles.directionsButton} onPress={handleGetDirections}>
          <Text style={styles.buttonText}>Get Directions</Text>
        </TouchableOpacity>

        {/* Button to go back to Details.js */}
        <TouchableOpacity style={styles.backButton} onPress={handleBackToDetails}>
          <Text style={styles.buttonText}>Back to Details</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  directionsButton: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  backButton: {
    position: 'absolute',
    bottom: 16,
    backgroundColor: '#3498db',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Direction;
