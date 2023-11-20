import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();

  const students = [
    { name: 'Daniel Akindun', studentId: '101384910' },
    { name: 'Algor Lombako', studentId: '101372552' },
    { name: 'Parsa Hosseini', studentId: '101356047' },
    { name: 'Divine Falola', studentId: '101394076' },
  ];

  const handleBackToDetails = () => {
    // Navigate back to the MainScreen
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('./assets/background.jpeg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.titleText}>About</Text>

        {/* Student Information */}
        {students.map((student, index) => (
          <View key={index} style={styles.studentContainer}>
            <Text style={styles.studentName}>{student.name}</Text>
            <Text style={styles.studentId}>Student ID: {student.studentId}</Text>
          </View>
        ))}

        {/* Button to go back to MainScreen.js */}
        <TouchableOpacity style={styles.backButton} onPress={handleBackToDetails}>
          <Text style={styles.buttonText}>Back to MainScreen</Text>
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
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#fff', // Text color
  },
  studentContainer: {
    marginBottom: 16,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Text color
  },
  studentId: {
    fontSize: 16,
    color: '#fff', // Text color
  },
  backButton: {
    backgroundColor: '#3498db',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default About;
