import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

interface Country {
  id: string;
  name: string;
  currency: string;
}

interface CountriesProps {
  route: {
    params: {
      countries: Country[];
    };
  };
}

const Countries: React.FC<CountriesProps> = ({ route }) => {
  const { countries } = route.params;

  return (
    <ScrollView style={styles.container}>
      {countries.length === 0 ? (
        <Text style={styles.empty}>No countries added yet.</Text>
      ) : (
        countries.map((country) => (
          <View key={country.id} style={styles.card}>
            <Text style={styles.name}>{country.name}</Text>
            <Text style={styles.currency}>Currency: {country.currency}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default Countries;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  empty: { textAlign: 'center', marginTop: 20, fontSize: 16 },
  card: {
    backgroundColor: '#e8f0fe',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  currency: { fontSize: 16, color: '#333' }
});
