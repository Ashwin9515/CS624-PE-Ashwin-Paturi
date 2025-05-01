import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  text: string;
  onPress: () => void;
  color: 'green' | 'red';
};

const TodoButton: React.FC<Props> = ({ text, onPress, color }) => (
  <TouchableOpacity style={[styles.button, { borderColor: color }]} onPress={onPress}>
    <Text style={[styles.buttonText, { color }]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1.5,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TodoButton;