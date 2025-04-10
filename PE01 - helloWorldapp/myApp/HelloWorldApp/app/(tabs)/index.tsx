import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Name: Ashwin Paturi</Text>
    <Text style={styles.text}>Program: Masters in Computer Science</Text>
    <Text style={styles.text}>School: City University of Seattle</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    margin: 5,
  },
});

export default App;
