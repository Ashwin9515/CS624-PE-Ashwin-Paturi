import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  label: 'All' | 'Active' | 'Completed';
  selected: boolean;
  setType: (type: 'All' | 'Active' | 'Completed') => void;
};

const TabBarItem: React.FC<Props> = ({ label, selected, setType }) => (
  <TouchableOpacity onPress={() => setType(label)}>
    <Text style={[styles.text, selected && styles.selected]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: { fontSize: 16, paddingHorizontal: 16 },
  selected: { fontWeight: 'bold', color: '#333', textDecorationLine: 'underline' },
});

export default TabBarItem;