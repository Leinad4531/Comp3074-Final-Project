import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SharePost = () => {
  const navigation = useNavigation();

  const handleBackToDetails = () => {
    navigation.goBack();
  };

  const shareOnFacebook = () => {
    const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=your-restaurant-website&quote=Check%20out%20this%20awesome%20restaurant!';
    Linking.openURL(facebookUrl);
  };

  const shareOnTwitter = () => {
    const twitterUrl = 'https://twitter.com/intent/tweet?url=your-restaurant-website&text=Check%20out%20this%20awesome%20restaurant!';
    Linking.openURL(twitterUrl);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/background.jpeg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.overlay}>
        <Text style={styles.titleText}>Share Post</Text>

        {/* Icons for Facebook and Twitter */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={shareOnFacebook}>
            <Icon name="facebook" size={100} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity onPress={shareOnTwitter}>
            <Icon name="twitter" size={100} color="#1da1f2" style={styles.twitterIcon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.descriptionText}>Choose your social media platform</Text>

        <TouchableOpacity style={styles.backButton} onPress={handleBackToDetails}>
          <Text style={styles.buttonText}>Back to Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  twitterIcon: {
    marginLeft: 16,
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
    color: '#fff',
  },
  backButton: {
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

export default SharePost;
