import React, { useState } from 'react';
import { ScrollView, Image, Text, TextInput, StyleSheet } from 'react-native';

const CoreComponentsApp = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('/workspaces/CS624-PE-Ashwin-Paturi/PE02 - CoreComponents/myApp/CoreComponentsApp/assets/images/icon.png')}
        style={styles.image}
      />
      <Text style={styles.title}>MSCS Courses</Text>

      <Text style={styles.subtitle}>Core Courses:</Text>
      <Text style={styles.course}>CS504: Software Engineering</Text>
      <Text style={styles.course}>CS506: Programming for Computing</Text>
      <Text style={styles.course}>CS519: Cloud Computing Overview</Text>
      <Text style={styles.course}>CS533: Computer Architecture</Text>
      <Text style={styles.course}>CS547: Secure Systems and Programs</Text>
      <Text style={styles.course}>CS522: Discrete Math and Algorithms for Computing</Text>
      <Text style={styles.course}>DS510: Artificial Intelligence for Data Science</Text>
      <Text style={styles.course}>DS620: Machine Learning and Deep Learning</Text>

      <Text style={styles.subtitle}>Depth of Study Courses:</Text>
      <Text style={styles.course}>CS624: Full Stack Development - Mobile App</Text>
      <Text style={styles.course}>CS628: Full Stack Development - Web Application</Text>

      <Text style={styles.subtitle}>Capstone Course:</Text>
      <Text style={styles.course}>CS687: Capstone Orientation</Text>

      <Text style={styles.inputLabel}>Favorite course?</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your favorite course"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />
      <Text style={styles.favorite}>Favorite: {favoriteCourse}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf2f8',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 5,
  },
  course: {
    fontSize: 16,
    marginLeft: 10,
  },
  inputLabel: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  favorite: {
    fontSize: 16,
    marginVertical: 10,
    fontStyle: 'italic',
  },
});

export default CoreComponentsApp;