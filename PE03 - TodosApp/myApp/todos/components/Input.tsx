import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  inputValue: string;
  inputChange: (value: string) => void;
  submitTodo: () => void;
};

const Input: React.FC<Props> = ({ inputValue, inputChange, submitTodo }) => (
  <View style={styles.container}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder="What needs to be done?"
      placeholderTextColor="#999"
      onChangeText={inputChange}
    />
    <TouchableOpacity style={styles.submitButton} onPress={submitTodo}>
      <Text style={styles.submitText}>Submit</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 6,
    elevation: 2,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 4,
    elevation: 2,
  },
  submitText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Input;