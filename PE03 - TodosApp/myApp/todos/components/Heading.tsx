import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>todos</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 40,
    textAlign: 'center',
    color: '#e3bcbc',
    fontWeight: '300',
  },
});

export default Heading;