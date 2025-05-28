import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';

interface AddCountryProps {
  route: {
    params: {
      addCountry: (country: { id: string; name: string; currency: string }) => void;
    };
  };
}

const AddCountry: React.FC<AddCountryProps> = ({ route }) => {
  const { addCountry } = route.params;
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = () => {
    if (name && currency) {
      addCountry({ id: uuid.v4().toString(), name, currency });
      setName('');
      setCurrency('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Country Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter country name"
        style={styles.input}
      />
      <Text style={styles.label}>Currency:</Text>
      <TextInput
        value={currency}
        onChangeText={setCurrency}
        placeholder="Enter currency"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Add Country</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCountry;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 5,
    marginBottom: 15
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
