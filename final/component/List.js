import * as React from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View, Image, TouchableOpacity, ActivityIndicator, TextInput, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function List() {
  // const titles = "All restaurants";
  const inputPlaceholder = "Tap name or tag";
  const restname = "Restaurant name";
  const restdesc = "Restaurant description";
  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Details');
  };

  return (
    <ImageBackground
      source={require('../assets/bgimage.png')}
      style={{width: width, height: height+20}}
    >
      <View style={styles.view}>
        
        <TextInput
            style={styles.searchBar}
            placeholder={inputPlaceholder}
            placeholderTextColor='white'
        />
        <Text style={styles.restname} onPress={handlePress}>{restname}</Text>
        <Text style={styles.restdesc} onPress={handlePress}>{restdesc}</Text>
      </View>
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
    searchBar: {
      height: 40,
      borderColor: '#fff',
      color: '#fff',
      width: '90%',
      borderWidth: 1,
      borderRadius: 100,
      paddingLeft: 10,
      marginBottom: 16,
    },
    view: {
      paddingTop: 10,
      paddingLeft: 25,
      height: '100%',
      width: '100%'
  },
    restname: {
      color: "#fff",
      fontSize: 30
    },
    restdesc : {
      color: "#fff",
      fontSize: 20
    }
    // menuButtonText: {
    //   color: '#fff',
    //   fontSize: 75
    
    // }
  })
