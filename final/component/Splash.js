import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('List');
    }, 10);
  });

  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash.png')} style={styles.logo} />
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const finHeight = height + 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: width,
    height: finHeight,
  },
});

export default SplashScreen;
