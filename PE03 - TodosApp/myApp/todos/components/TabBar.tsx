import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabBarItem from './TabBarItem';

type Props = {
  type: 'All' | 'Active' | 'Completed';
  setType: (type: 'All' | 'Active' | 'Completed') => void;
};

const TabBar: React.FC<Props> = ({ type, setType }) => (
  <View style={styles.container}>
    <TabBarItem label="All" selected={type === 'All'} setType={setType} />
    <TabBarItem label="Active" selected={type === 'Active'} setType={setType} />
    <TabBarItem label="Completed" selected={type === 'Completed'} setType={setType} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
});

export default TabBar;